
import { Service, FAQ, BlogPost } from './types';

export const COMPANY_INFO = {
  name: 'Preciseo Tax Services Inc',
  address: '5900 Balcones Drive #28223, Austin, TX 78731',
  email: 'Info@preciseotax.com',
  phone: '+1 (469) 942-7997',
  socials: {
    facebook: '#',
    linkedin: '#',
    instagram: '#',
    twitter: '#'
  }
};

export const SERVICES: (Service & { iconName: string })[] = [
  {
    id: 'individual-filing',
    title: 'Individual Tax Filing',
    description: 'Expert federal and state returns for individuals.',
    icon: '',
    iconName: 'User'
  },
  {
    id: 'business-filing',
    title: 'Business Tax Filing',
    description: 'Tax solutions for LLCs, Corps, and Partnerships.',
    icon: '',
    iconName: 'Briefcase'
  },
  {
    id: 'fbar-fbar',
    title: 'FBAR & FATCA / Global Income Reporting',
    description: 'Specialized international tax compliance.',
    icon: '',
    iconName: 'Globe'
  },
  {
    id: 'itin-app',
    title: 'ITIN Application',
    description: 'Authorized assistance with ITIN needs.',
    icon: '',
    iconName: 'IdCard'
  },
  {
    id: 'tax-planning',
    title: 'Tax Planning',
    description: 'Strategic planning to maximize savings.',
    icon: '',
    iconName: 'Target'
  },
  {
    id: 'business-formation',
    title: 'Business Formation',
    description: 'Entity selection and registration services.',
    icon: '',
    iconName: 'Layers'
  },
  {
    id: 'payroll-processing',
    title: 'Payroll Processing',
    description: 'Full-service payroll and compliance.',
    icon: '',
    iconName: 'Calculator'
  },
  {
    id: 'bookkeeping',
    title: 'Bookkeeping',
    description: 'Accurate and timely financial records.',
    icon: '',
    iconName: 'BookText'
  }
];

export const FAQS: FAQ[] = [
  {
    question: "When is the tax filing deadline for 2024?",
    answer: "For most individual taxpayers, the deadline to file 2023 federal income tax returns and pay taxes owed is April 15, 2024."
  },
  {
    question: "What documents do I need to file my taxes?",
    answer: "Generally, you need W-2s, 1099s, mortgage interest statements, property tax records, and receipts for deductible expenses."
  },
  {
    question: "How long does it take to get my tax refund?",
    answer: "The IRS typically issues most refunds in less than 21 calendar days for e-filed returns with direct deposit."
  },
  {
    question: "Can I file an extension?",
    answer: "Yes, you can file for a 6-month extension to file your return, but this does not extend the time to pay any taxes owed."
  },
  {
    question: "What is an ITIN?",
    answer: "An Individual Taxpayer Identification Number (ITIN) is a tax processing number issued by the IRS for those who aren't eligible for a Social Security Number."
  },
  {
    question: "Do you offer bookkeeping for small businesses?",
    answer: "Yes, we provide full-cycle bookkeeping services tailored to small and medium-sized enterprises."
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 5 Tax Deductions for Freelancers in 2024',
    excerpt: 'Discover the most common and often overlooked deductions that can save you thousands...',
    date: 'Oct 12, 2023',
    category: 'Tax Tips',
    imageUrl: 'https://picsum.photos/seed/tax1/600/400'
  },
  {
    id: '2',
    title: 'Understanding the New IRS Reporting Requirements',
    excerpt: 'What the latest legislative changes mean for your business and personal filings...',
    date: 'Nov 05, 2023',
    category: 'Legal Updates',
    imageUrl: 'https://picsum.photos/seed/tax2/600/400'
  }
];
