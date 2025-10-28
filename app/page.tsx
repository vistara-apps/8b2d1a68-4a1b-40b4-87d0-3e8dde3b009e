'use client';

import { useState, useEffect } from 'react';
import { Activity, TrendingUp, TrendingDown, Zap, Settings2, Plus } from 'lucide-react';
import { AgentCard } from './components/AgentCard';
import { VibeIndicator } from './components/VibeIndicator';
import { PerformanceChart } from './components/PerformanceChart';
import { MarketOverview } from './components/MarketOverview';
import { Header } from './components/Header';

interface Agent {
  id: string;
  name: string;
  status: 'running' | 'paused' | 'errored';
  strategy: string;
  assetPair: string;
  pnl: number;
  pnlPercent: number;
  trades: number;
  vibeScore: number;
  capital: number;
}

export default function Home() {
  const [agents, setAgents] = useState<Agent[]>([
    {
      id: '1',
      name: 'Momentum Hunter',
      status: 'running',
      strategy: 'Trend Following',
      assetPair: 'ETH/USDT',
      pnl: 1247.82,
      pnlPercent: 12.48,
      trades: 47,
      vibeScore: 78,
      capital: 10000
    },
    {
      id: '2',
      name: 'Vibe Scalper',
      status: 'running',
      strategy: 'Sentiment Scalping',
      assetPair: 'BTC/USDT',
      pnl: -342.15,
      pnlPercent: -3.42,
      trades: 89,
      vibeScore: 42,
      capital: 10000
    },
    {
      id: '3',
      name: 'Range Master',
      status: 'paused',
      strategy: 'Range Trading',
      assetPair: 'SOL/USDT',
      pnl: 567.33,
      pnlPercent: 5.67,
      trades: 23,
      vibeScore: 65,
      capital: 10000
    }
  ]);

  const [marketVibe, setMarketVibe] = useState(68);
  const [totalPnl, setTotalPnl] = useState(0);

  useEffect(() => {
    const total = agents.reduce((sum, agent) => sum + agent.pnl, 0);
    setTotalPnl(total);
  }, [agents]);

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="glass-effect rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted text-sm">Total P&L</span>
              <Activity className="w-4 h-4 text-accent" />
            </div>
            <div className="text-2xl font-bold">
              ${totalPnl.toFixed(2)}
            </div>
            <div className={`text-sm ${totalPnl >= 0 ? 'text-success' : 'text-danger'}`}>
              {totalPnl >= 0 ? '+' : ''}{((totalPnl / 30000) * 100).toFixed(2)}%
            </div>
          </div>

          <div className="glass-effect rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted text-sm">Active Agents</span>
              <Zap className="w-4 h-4 text-accent" />
            </div>
            <div className="text-2xl font-bold">
              {agents.filter(a => a.status === 'running').length}
            </div>
            <div className="text-sm text-muted">
              of {agents.length} total
            </div>
          </div>

          <div className="glass-effect rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted text-sm">Total Trades</span>
              <TrendingUp className="w-4 h-4 text-accent" />
            </div>
            <div className="text-2xl font-bold">
              {agents.reduce((sum, a) => sum + a.trades, 0)}
            </div>
            <div className="text-sm text-success">
              +12 today
            </div>
          </div>

          <div className="glass-effect rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted text-sm">Market Vibe</span>
              <Activity className="w-4 h-4 text-accent" />
            </div>
            <div className="flex items-center gap-2">
              <VibeIndicator score={marketVibe} size="sm" />
              <span className="text-2xl font-bold">{marketVibe}</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Agents */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Active Agents</h2>
              <button className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                <Plus className="w-4 h-4" />
                Deploy Agent
              </button>
            </div>
            
            <div className="space-y-4">
              {agents.map(agent => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          </div>

          {/* Right Column - Charts & Market */}
          <div className="space-y-4">
            <div className="glass-effect rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">Portfolio Performance</h3>
              <PerformanceChart />
            </div>

            <div className="glass-effect rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">Market Overview</h3>
              <MarketOverview />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
