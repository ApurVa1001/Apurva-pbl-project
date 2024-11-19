import React, { useState } from 'react';
import Header from './Header';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';

interface Expense {
  id: string;
  amount: number;
  description: string;
  category: string;
  date: string;
}

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (expenseData: Omit<Expense, 'id'>) => {
    const newExpense = {
      ...expenseData,
      id: crypto.randomUUID(),
    };
    setExpenses([newExpense, ...expenses]);
  };

  const handleDeleteExpense = (id: string) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ExpenseForm onAddExpense={handleAddExpense} />
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <ExpenseSummary expenses={expenses} />
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Expenses</h2>
              <ExpenseList 
                expenses={expenses} 
                onDeleteExpense={handleDeleteExpense}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}