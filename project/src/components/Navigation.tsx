import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Receipt, 
  PieChart, 
  Target, 
  Settings 
} from 'lucide-react';

export default function Navigation() {
  const navItems = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/expenses", icon: Receipt, label: "Expenses" },
    { to: "/analytics", icon: PieChart, label: "Analytics" },
    { to: "/budgets", icon: Target, label: "Budgets" },
    { to: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <nav className="bg-white shadow-sm px-4 py-2 flex justify-between items-center lg:justify-center space-x-8">
      {navItems.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
              isActive
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
            }`
          }
        >
          <Icon className="h-5 w-5" />
          <span className="hidden lg:inline">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}