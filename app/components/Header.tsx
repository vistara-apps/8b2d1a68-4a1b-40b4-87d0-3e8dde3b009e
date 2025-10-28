'use client';

import { Activity, Settings2 } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-white/10 bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Monad Vibe Trader</h1>
              <p className="text-xs text-muted">Powered by Monad & Astar</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-success/10 border border-success/20">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm text-success font-medium">Connected</span>
            </div>
            
            <button className="p-2 hover:bg-surface-hover rounded-lg transition-colors">
              <Settings2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
