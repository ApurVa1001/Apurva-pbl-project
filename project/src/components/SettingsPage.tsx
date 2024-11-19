import React, { useState } from 'react';
import { User, Bell, Shield, Palette } from 'lucide-react';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    budget: true,
    weekly: false,
  });

  const [theme, setTheme] = useState('light');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg divide-y divide-gray-200">
        <div className="p-6">
          <h3 className="text-lg font-medium flex items-center text-gray-900">
            <User className="h-5 w-5 mr-2" />
            Profile Settings
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">First name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">Last name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-4">
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-medium flex items-center text-gray-900">
            <Bell className="h-5 w-5 mr-2" />
            Notifications
          </h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="email"
                  type="checkbox"
                  checked={notifications.email}
                  onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="email" className="font-medium text-gray-700">
                  Email notifications
                </label>
                <p className="text-gray-500 text-sm">Get notified when you exceed your budget</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="budget"
                  type="checkbox"
                  checked={notifications.budget}
                  onChange={(e) => setNotifications({ ...notifications, budget: e.target.checked })}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="budget" className="font-medium text-gray-700">
                  Budget alerts
                </label>
                <p className="text-gray-500 text-sm">Get notified when approaching budget limits</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-medium flex items-center text-gray-900">
            <Shield className="h-5 w-5 mr-2" />
            Security
          </h3>
          <div className="mt-4">
            <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Change Password
            </button>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-medium flex items-center text-gray-900">
            <Palette className="h-5 w-5 mr-2" />
            Appearance
          </h3>
          <div className="mt-4">
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}