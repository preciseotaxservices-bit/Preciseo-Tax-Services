
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface UserFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}
