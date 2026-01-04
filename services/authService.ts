
import { UserFormData } from '../types';

/**
 * AUTH SERVICE (MOCK BACKEND)
 * In a production environment, this would be an API wrapper.
 */

interface UserRecord extends UserFormData {
  id: string;
  isVerified: boolean;
  verificationToken?: string;
  verificationExpires?: number;
  resetToken?: string;
  resetExpires?: number;
  createdAt: number;
}

class AuthService {
  private static instance: AuthService;
  private storageKey = 'preciseo_users_db';

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  private getUsers(): UserRecord[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveUsers(users: UserRecord[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  private generateToken(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  public async signup(data: UserFormData): Promise<{ success: boolean; message: string }> {
    const users = this.getUsers();
    
    if (users.find(u => u.email === data.email)) {
      return { success: false, message: 'Email already registered.' };
    }

    const token = this.generateToken();
    const expires = Date.now() + 24 * 60 * 60 * 1000; // 24 Hours

    const newUser: UserRecord = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      isVerified: false,
      verificationToken: token,
      verificationExpires: expires,
      createdAt: Date.now()
    };

    users.push(newUser);
    this.saveUsers(users);
    this.logVerificationEmail(data.email, data.firstName || 'Client', token);

    return { success: true, message: 'Verification email sent.' };
  }

  public async resendVerification(email: string): Promise<{ success: boolean; message: string }> {
    const users = this.getUsers();
    const userIndex = users.findIndex(u => u.email === email);

    if (userIndex === -1) {
      return { success: false, message: 'User not found.' };
    }

    const user = users[userIndex];
    if (user.isVerified) {
      return { success: false, message: 'Account already verified.' };
    }

    const token = this.generateToken();
    users[userIndex].verificationToken = token;
    users[userIndex].verificationExpires = Date.now() + 24 * 60 * 60 * 1000;
    this.saveUsers(users);

    this.logVerificationEmail(user.email, user.firstName, token, true);
    return { success: true, message: 'Verification email resent successfully.' };
  }

  public async forgotPassword(email: string): Promise<{ success: boolean; message: string }> {
    const users = this.getUsers();
    const userIndex = users.findIndex(u => u.email === email);

    if (userIndex === -1) {
      return { success: false, message: 'If that email exists, a reset link has been sent.' };
    }

    const token = this.generateToken();
    users[userIndex].resetToken = token;
    users[userIndex].resetExpires = Date.now() + 1 * 60 * 60 * 1000; // 1 Hour
    this.saveUsers(users);

    this.logResetEmail(email, token);
    return { success: true, message: 'Reset link sent.' };
  }

  public async resetPassword(token: string, newPass: string): Promise<{ success: boolean; message: string }> {
    const users = this.getUsers();
    const userIndex = users.findIndex(u => u.resetToken === token);

    if (userIndex === -1) {
      return { success: false, message: 'Invalid or expired reset link.' };
    }

    const user = users[userIndex];
    if (user.resetExpires && Date.now() > user.resetExpires) {
      return { success: false, message: 'Reset link has expired.' };
    }

    users[userIndex].password = newPass;
    users[userIndex].confirmPassword = newPass;
    delete users[userIndex].resetToken;
    delete users[userIndex].resetExpires;
    this.saveUsers(users);

    return { success: true, message: 'Password reset successfully.' };
  }

  public async verifyToken(token: string): Promise<{ success: boolean; message: string }> {
    const users = this.getUsers();
    const userIndex = users.findIndex(u => u.verificationToken === token);

    if (userIndex === -1) {
      return { success: false, message: 'Invalid or expired verification link.' };
    }

    const user = users[userIndex];
    if (user.verificationExpires && Date.now() > user.verificationExpires) {
      return { success: false, message: 'Verification link has expired.' };
    }

    users[userIndex].isVerified = true;
    delete users[userIndex].verificationToken;
    delete users[userIndex].verificationExpires;
    this.saveUsers(users);

    return { success: true, message: 'Email verified successfully.' };
  }

  public async login(email: string, pass: string): Promise<{ success: boolean; user?: any; message: string }> {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === pass);

    if (!user) return { success: false, message: 'Invalid credentials.' };
    if (!user.isVerified) return { success: false, message: 'UNVERIFIED' };

    return { success: true, user, message: 'Login successful.' };
  }

  private logVerificationEmail(email: string, name: string, token: string, isResend = false) {
    const link = `${window.location.origin}/#/verify/${token}`;
    console.group(`%c 📧 ${isResend ? 'RESENT' : 'REAL'} VERIFICATION EMAIL SENT `, "background: #2E2759; color: #fff; padding: 5px; border-radius: 5px;");
    console.log(`To: ${email}\nSubject: Verify Your Email – Preciseo Tax Services\n\nHello ${name},\n\nPlease verify your email by clicking the link below:\n${link}\n\n– Preciseo Tax Services Team`);
    console.groupEnd();
  }

  private logResetEmail(email: string, token: string) {
    const link = `${window.location.origin}/#/reset-password/${token}`;
    console.group("%c 🔑 PASSWORD RESET EMAIL SENT ", "background: #E84545; color: #fff; padding: 5px; border-radius: 5px;");
    console.log(`To: ${email}\nSubject: Reset Your Password – Preciseo Tax Services\n\nHello,\n\nWe received a request to reset your Preciseo Tax Services account password.\n\nClick the link below to reset your password:\n${link}\n\n– Preciseo Tax Services Team`);
    console.groupEnd();
  }
}

export const authApi = AuthService.getInstance();
