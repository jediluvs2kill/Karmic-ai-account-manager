import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ChatInterface } from './components/ChatInterface';
import { DashboardCard } from './components/DashboardCard';
import { ExpensesIcon, ApprovalsIcon, PayrollIcon, BudgetIcon } from './constants';
import { HomePage } from './components/HomePage';

const App: React.FC = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  if (!showDashboard) {
    return <HomePage onLaunch={() => setShowDashboard(true)} />;
  }

  return (
    <div className="flex h-screen bg-base-dark text-text-primary overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardCard 
              title="Total Monthly Expenses" 
              value="$ 45,231.89" 
              icon={<ExpensesIcon />} 
              change="+3.5% vs last month"
              changeType="negative"
            />
            <DashboardCard 
              title="Pending Approvals" 
              value="12" 
              icon={<ApprovalsIcon />}
              change="2 urgent"
              changeType="positive"
            />
            <DashboardCard 
              title="Next Payroll Run" 
              value="July 15, 2024" 
              icon={<PayrollIcon />}
              change="in 10 days"
              changeType="neutral"
            />
            <DashboardCard 
              title="Team Budgets" 
              value="3 of 5 on Track" 
              icon={<BudgetIcon />}
              change="Marketing over budget"
              changeType="negative"
            />
          </div>
          <ChatInterface />
        </main>
      </div>
    </div>
  );
};

export default App;