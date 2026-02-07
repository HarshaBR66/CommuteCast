
import React, { useState } from 'react';
import ArticleInput from './components/ArticleInput';
import BriefingCard from './components/BriefingCard';
import { NewsSummary, SummaryLength, SummaryTone } from './types';
import { generateSummary } from './services/geminiService';

const App: React.FC = () => {
  const [summaries, setSummaries] = useState<NewsSummary[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (text: string, length: SummaryLength, tone: SummaryTone) => {
    setIsLoading(true);
    setError(null);
    try {
      const summaryText = await generateSummary(text, length, tone);
      
      const newSummary: NewsSummary = {
        id: Math.random().toString(36).substr(2, 9),
        originalTitle: text.split('\n')[0].substring(0, 60) + (text.trim().length > 60 ? '...' : ''),
        summaryText: summaryText,
        createdAt: Date.now(),
      };

      setSummaries(prev => [newSummary, ...prev]);
    } catch (err: any) {
      console.error(err);
      setError("Failed to generate summary. Please check your API key or input.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20 selection:bg-blue-100">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-morphism border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-9 w-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 4.804A7.993 7.993 0 002 12a5 5 0 0010 0 8.005 8.005 0 01-3-7.196z" />
                <path fillRule="evenodd" d="M15 3a1 1 0 011 1v15a1 1 0 01-1.832.553L11 16.382l-2.168 3.171A1 1 0 017 19V4a1 1 0 011-1h7z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              CommuteCast
            </h1>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <span className="text-sm text-slate-400 font-medium">Instant Briefing Engine</span>
            <div className="h-4 w-px bg-slate-200"></div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-wide">Pro v3.0</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pt-8 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Input Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Get the gist,<br /><span className="text-blue-600">save time.</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-sm">
                Paste any long news article and get a crystal clear, structured summary in seconds.
              </p>
            </div>
            
            <ArticleInput onGenerate={handleGenerate} isLoading={isLoading} />
            
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-medium flex items-center space-x-3 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
            )}
          </div>

          {/* History/List Section */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-800">Your Fresh Briefings</h2>
              {summaries.length > 0 && (
                <button 
                  onClick={() => setSummaries([])}
                  className="text-xs text-slate-400 hover:text-red-500 font-bold uppercase tracking-wider"
                >
                  Clear All
                </button>
              )}
            </div>

            {summaries.length === 0 && !isLoading ? (
              <div className="flex flex-col items-center justify-center py-24 px-6 text-center space-y-6 bg-white rounded-[2rem] border-2 border-dashed border-slate-100">
                <div className="h-20 w-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-200 animate-bounce-slow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-700">Ready for your first briefing?</h3>
                  <p className="text-slate-400 text-sm max-w-xs mx-auto mt-2 leading-relaxed">
                    Once you paste an article, we'll format it into clear, actionable bullet points for your commute reading.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {isLoading && (
                   <div className="animate-pulse bg-white p-8 rounded-3xl border border-slate-100 space-y-4">
                     <div className="h-6 bg-slate-100 rounded w-3/4"></div>
                     <div className="h-4 bg-slate-50 rounded w-1/2"></div>
                     <div className="space-y-2 pt-4">
                       <div className="h-4 bg-slate-50 rounded w-full"></div>
                       <div className="h-4 bg-slate-50 rounded w-full"></div>
                       <div className="h-4 bg-slate-50 rounded w-5/6"></div>
                     </div>
                   </div>
                )}
                {summaries.map((s) => (
                  <BriefingCard key={s.id} summary={s} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 py-3 px-4 hidden md:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.1em]">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
              <span>Gemini Flash Pro Engine Active</span>
            </span>
            <span>Latency: ~1.2s</span>
          </div>
          <div>EST. 2024 • COMMUTECAST INTELLIGENCE</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
