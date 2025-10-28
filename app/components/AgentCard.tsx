'use client';

import { Play, Pause, TrendingUp, TrendingDown, MoreVertical } from 'lucide-react';
import { VibeIndicator } from './VibeIndicator';

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

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  const statusColors = {
    running: 'bg-success/10 text-success border-success/20',
    paused: 'bg-warning/10 text-warning border-warning/20',
    errored: 'bg-danger/10 text-danger border-danger/20'
  };

  const statusLabels = {
    running: 'Active',
    paused: 'Paused',
    errored: 'Error'
  };

  return (
    <div className="glass-effect rounded-lg p-4 hover:bg-surface-hover transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold">{agent.name}</h3>
            <span className={`px-2 py-0.5 rounded text-xs font-medium border ${statusColors[agent.status]}`}>
              {statusLabels[agent.status]}
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted">
            <span>{agent.strategy}</span>
            <span>•</span>
            <span className="font-mono">{agent.assetPair}</span>
          </div>
        </div>
        
        <button className="p-2 hover:bg-surface rounded-lg transition-colors">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4">
        <div>
          <div className="text-xs text-muted mb-1">P&L</div>
          <div className={`text-lg font-bold ${agent.pnl >= 0 ? 'text-success' : 'text-danger'}`}>
            ${Math.abs(agent.pnl).toFixed(2)}
          </div>
          <div className={`text-xs ${agent.pnl >= 0 ? 'text-success' : 'text-danger'}`}>
            {agent.pnl >= 0 ? '+' : '-'}{Math.abs(agent.pnlPercent).toFixed(2)}%
          </div>
        </div>

        <div>
          <div className="text-xs text-muted mb-1">Trades</div>
          <div className="text-lg font-bold">{agent.trades}</div>
          <div className="text-xs text-muted">total</div>
        </div>

        <div>
          <div className="text-xs text-muted mb-1">Capital</div>
          <div className="text-lg font-bold">${(agent.capital / 1000).toFixed(1)}k</div>
          <div className="text-xs text-muted">deployed</div>
        </div>

        <div>
          <div className="text-xs text-muted mb-1">Vibe</div>
          <div className="flex items-center gap-2">
            <VibeIndicator score={agent.vibeScore} size="sm" />
            <span className="text-lg font-bold">{agent.vibeScore}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-colors">
          {agent.status === 'running' ? (
            <>
              <Pause className="w-4 h-4" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              <span>Resume</span>
            </>
          )}
        </button>
        <button className="px-4 py-2 hover:bg-surface rounded-lg transition-colors text-sm">
          Details
        </button>
      </div>
    </div>
  );
}
