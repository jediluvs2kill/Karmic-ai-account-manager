import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';
import { type Message, type Sender } from '../types';

const AIMessage: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-3 justify-start">
    <div className="w-8 h-8 rounded-full bg-corp-indigo-dark flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5 text-corp-indigo-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
    </div>
    <div className="bg-base-light rounded-lg rounded-tl-none p-4 max-w-lg">
      <p className="text-sm text-text-primary whitespace-pre-wrap">{text}</p>
    </div>
  </div>
);

const UserMessage: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-3 justify-end">
    <div className="bg-corp-indigo-light rounded-lg rounded-tr-none p-4 max-w-lg">
      <p className="text-sm text-white">{text}</p>
    </div>
    <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
    </div>
  </div>
);

const LoadingIndicator: React.FC = () => (
    <div className="flex items-start gap-3 justify-start">
        <div className="w-8 h-8 rounded-full bg-corp-indigo-dark flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-corp-indigo-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
        </div>
        <div className="bg-base-light rounded-lg rounded-tl-none p-4 max-w-lg flex items-center space-x-2">
            <div className="w-2 h-2 bg-corp-indigo-light rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-corp-indigo-light rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-corp-indigo-light rounded-full animate-bounce"></div>
        </div>
    </div>
);

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial',
      text: 'Hello! I am your Accounts AI assistant. You can ask me to log expenses, check budget status, or inquire about payroll.',
      sender: 'ai',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const aiResponseText = await getAIResponse(input);
    const aiMessage: Message = { id: `${Date.now()}-ai`, text: aiResponseText, sender: 'ai' };
    setMessages((prev) => [...prev, aiMessage]);
    setIsLoading(false);
  };

  return (
    <div className="bg-base-light rounded-xl shadow-lg border border-slate-700/50 flex flex-col h-[60vh] max-h-[700px]">
      <div className="p-4 border-b border-slate-700/50">
        <h2 className="text-lg font-semibold text-text-primary">Karmic AI Assistant</h2>
        <p className="text-xs text-text-secondary">Powered by Gemini</p>
      </div>
      <div className="flex-1 p-4 space-y-6 overflow-y-auto">
        {messages.map((msg) =>
          msg.sender === 'ai' ? <AIMessage key={msg.id} text={msg.text} /> : <UserMessage key={msg.id} text={msg.text} />
        )}
        {isLoading && <LoadingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-slate-700/50">
        <form onSubmit={handleSendMessage} className="flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., 'Log $50 for team lunch'"
            className="flex-1 bg-base-dark border border-slate-600 rounded-lg p-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-corp-indigo-light transition-shadow"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-corp-indigo-light text-white font-semibold px-4 py-3 rounded-lg hover:bg-corp-indigo-light/90 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
          </button>
        </form>
      </div>
    </div>
  );
};