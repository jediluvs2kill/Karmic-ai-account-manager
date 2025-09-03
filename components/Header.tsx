
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex-shrink-0 bg-base-light/50 border-b border-slate-700/50 flex items-center justify-between p-4">
      <h1 className="text-xl font-semibold text-text-primary">Welcome Back!</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>
        <img src="https://picsum.photos/100" alt="User Avatar" className="w-10 h-10 rounded-full object-cover" />
      </div>
    </header>
  );
};
   