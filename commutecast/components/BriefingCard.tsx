
import React from 'react';
import { NewsSummary } from '../types';

interface BriefingCardProps {
  summary: NewsSummary;
}

const BriefingCard: React.FC<BriefingCardProps> = ({ summary }) => {
  // Simple bullet point parsing for display if it's markdown-ish
  const points = summary.summaryText
    .split(/\n/)
    .filter(line => line.trim().startsWith('-') || line.trim().startsWith('*') || line.trim().length > 5)
    .map(line => line.trim().replace(/^[-*]\s*/, ''));

  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-start mb-6 pb-4 border-b border-slate-50">
        <h3 className="text-xl font-bold text-slate-800 leading-tight">
          {summary.originalTitle}
        </h3>
        <span className="shrink-0 text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
          {new Date(summary.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
      
      <div className="space-y-4">
        {points.length > 0 ? (
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start space-x-3 group">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shrink-0 group-hover:scale-125 transition-transform"></div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-700 leading-relaxed whitespace-pre-line">
            {summary.summaryText}
          </p>
        )}
      </div>

      <div className="mt-8 pt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-bold">Summary Ready</span>
        </div>
        <button 
          onClick={() => {
            navigator.clipboard.writeText(summary.summaryText);
            alert("Copied to clipboard!");
          }}
          className="text-xs text-slate-400 hover:text-slate-600 font-medium transition-colors underline underline-offset-4"
        >
          Copy Text
        </button>
      </div>
    </div>
  );
};

export default BriefingCard;
