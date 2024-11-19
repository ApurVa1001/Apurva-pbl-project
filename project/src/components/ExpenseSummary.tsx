import React from 'react';
import { DollarSign, TrendingUp, Calendar } from 'lucide-react';

interface Expense {
  amount: number;
  date: string;
}

interface ExpenseSummaryProps {
  expenses: Expense[];
}

export default function ExpenseSummary({ expenses }: ExpenseSummaryProps) {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  const currentMonth = new Date().getMonth();
  const monthlyExpenses = expenses
    .filter(expense => new Date(expense.date).getMonth() === currentMonth)
    .reduce((sum, expense) => sum + expense.amount, 0);

  const last7Days = new Date();
  last7Days.setDate(last7Days.getDate() - 7);
  const weeklyExpenses = expenses
    .filter(expense => new Date(expense.date) >= last7Days)
    .reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-blue-100">
            <DollarSign className="h-6 w-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Total Expenses</p>
            <p className="text-2xl font-semibold text-gray-900">${totalExpenses.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-green-100">
            <Calendar className="h-6 w-6 text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Monthly Expenses</p>
            <p className="text-2xl font-semibold text-gray-900">${monthlyExpenses.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-purple-100">
            <TrendingUp className="h-6 w-6 text-purple-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Weekly Expenses</p>
            <p className="text-2xl font-semibold text-gray-900">${weeklyExpenses.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}