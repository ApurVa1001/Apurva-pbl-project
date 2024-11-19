export interface Expense {
  id: string;
  amount: number;
  description: string;
  category: string;
  date: string;
}

export interface Budget {
  id: string;
  category: string;
  amount: number;
  period: 'monthly' | 'weekly';
}

export interface Category {
  id: string;
  name: string;
  color: string;
}