import React, { useState } from 'react';
import { Plus, AlertCircle } from 'lucide-react';
import type { Budget } from '../types/expense';

export default function BudgetPage() {
  const [budgets, setBudgets] = useState<Budget[]>([
    { id: '1', category: 'groceries', amount: 500, period: 'monthly' },
    { id: '2', category: 'entertainment', amount: 200, period: 'monthly' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newBudget, setNewBudget] = useState({
    category: 'groceries',
    amount: '',
    period: 'monthly',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const budget: Budget = {
      id: crypto.randomUUID(),
      category: newBudget.category,
      amount: parseFloat(newBudget.amount),
      period: newBudget.period as 'monthly' | 'weekly',
    };
    setBudgets([...budgets, budget]);
    setShowForm(false);
    setNewBudget({ category: 'groceries', amount: '', period: 'monthly' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Budget Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Budget
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                value={newBudget.category}
                onChange={(e) => setNewBudget({ ...newBudget, category: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="groceries">Groceries</option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
                <option value="transport">Transport</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Amount</label>
              <input
                type="number"
                value={newBudget.amount}
                onChange={(e) => setNewBudget({ ...newBudget, amount: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Period</label>
              <select
                value={newBudget.period}
                onChange={(e) => setNewBudget({ ...newBudget, period: e.target.value as 'monthly' | 'weekly' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Save Budget
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {budgets.map((budget) => (
          <div key={budget.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold capitalize">{budget.category}</h3>
                <p className="text-sm text-gray-500 capitalize">{budget.period} Budget</p>
              </div>
              <span className="text-2xl font-bold">${budget.amount}</span>
            </div>
            
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: '75%' }}
                />
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-600">
                <AlertCircle className="h-4 w-4 mr-1 text-yellow-500" />
                75% of budget used
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}