
// AppView enum defines the different modules available in the application
export enum AppView {
  DASHBOARD = 'DASHBOARD',
  CODE = 'CODE',
  STUDIO = 'STUDIO',
  VISION = 'VISION',
  VOICE = 'VOICE',
  SETTINGS = 'SETTINGS',
}

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message?: string;
}
