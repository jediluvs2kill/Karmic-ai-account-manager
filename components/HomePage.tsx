import React from 'react';

interface HomePageProps {
  onLaunch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onLaunch }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-base-dark text-text-primary">
      <div className="text-center p-8 max-w-2xl mx-auto">
        <div className="mb-6">
            <svg className="h-16 w-16 text-corp-indigo-light mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
            </svg>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Karmic <span className="text-corp-indigo-light">AI</span> Accounts Manager
        </h1>
        <p className="text-lg text-text-secondary mb-8">
          Intelligent, streamlined, and effortless financial management for your business. Log expenses, manage payroll, and track budgets with our powerful AI assistant.
        </p>
        <button
          onClick={onLaunch}
          className="bg-corp-indigo-light text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-corp-indigo-light/90 transition-transform transform hover:scale-105 duration-300 shadow-lg"
          aria-label="Launch the Karmic AI Accounts Manager dashboard"
        >
          Launch Dashboard
        </button>
      </div>
    </div>
  );
};