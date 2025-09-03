import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon, change, changeType }) => {
  const changeColor = {
    positive: 'text-green-400',
    negative: 'text-red-400',
    neutral: 'text-slate-400'
  }[changeType];

  return (
    <div className="bg-base-light p-5 rounded-xl shadow-lg border border-slate-700/50 transform hover:-translate-y-1 transition-transform duration-300">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <p className="text-sm text-text-secondary font-medium">{title}</p>
          <p className="text-2xl font-bold text-text-primary mt-1">{value}</p>
        </div>
        <div className="bg-corp-indigo-dark/50 p-3 rounded-full text-corp-indigo-light">
          {icon}
        </div>
      </div>
      <div className={`text-xs mt-4 font-medium ${changeColor}`}>
        {change}
      </div>
    </div>
  );
};