import React from 'react';
import { HomeIcon, ExpensesIcon, PayrollIcon, HistoryIcon, SettingsIcon, HelpIcon } from '../constants';

const SidebarLink: React.FC<{ icon: React.ReactNode; text: string; active?: boolean }> = ({ icon, text, active = false }) => {
  return (
    <a
      href="#"
      className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
        active
          ? 'bg-corp-indigo-light/20 text-corp-indigo-light'
          : 'text-text-secondary hover:bg-base-light hover:text-text-primary'
      }`}
    >
      {icon}
      <span className="ml-4 font-medium">{text}</span>
    </a>
  );
};

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-base-light flex-shrink-0 p-4 border-r border-slate-700/50 hidden lg:flex flex-col">
      <div className="flex items-center mb-10 px-2">
         <svg className="h-10 w-10 text-corp-indigo-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
         </svg>
        <span className="text-2xl font-bold ml-2 text-text-primary">Karmic<span className="text-corp-indigo-light">AI</span></span>
      </div>
      <nav className="flex-1 flex flex-col gap-2">
        <SidebarLink icon={<HomeIcon />} text="Dashboard" active />
        <SidebarLink icon={<ExpensesIcon />} text="Expenses" />
        <SidebarLink icon={<PayrollIcon />} text="Payroll" />
        <SidebarLink icon={<HistoryIcon />} text="History" />
        <SidebarLink icon={<SettingsIcon />} text="Settings" />
      </nav>
      <div className="mt-auto">
        <SidebarLink icon={<HelpIcon />} text="Help & Support" />
      </div>
    </aside>
  );
};