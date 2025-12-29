export enum TransactionStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  DISPUTED = 'DISPUTED'
}

export enum TransactionType {
  CASH_TO_SINPE = 'CASH_TO_SINPE',
  SINPE_TO_CASH = 'SINPE_TO_CASH'
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  transactions: number;
  verified: boolean;
  role: 'user' | 'admin' | 'agent';
}

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  commission: number;
  user: User;
  status: TransactionStatus;
  date: string;
  location?: string;
  distance?: string;
  description?: string;
}

export interface WalletTransaction {
  id: string;
  title: string;
  date: string;
  amount: number;
  type: 'credit' | 'debit';
  status: 'completed' | 'pending' | 'failed';
  icon: string;
}