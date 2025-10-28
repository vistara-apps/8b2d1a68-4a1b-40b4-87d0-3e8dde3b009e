'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';

const markets = [
  { pair: 'BTC/USDT', price: 43250.50, change: 2.34, volume: '2.4B' },
  { pair: 'ETH/USDT', price: 2280.75, change: 1.82, volume: '1.8B' },
  { pair: 'SOL/USDT', price: 98.42, change: -0.45, volume: '456M' },
  { pair: 'ASTR/USDT', price: 0.0842, change: 5.67, volume: '89M' },
];

export function MarketOverview() {
  return (
    <div className="space-y-3">
      {markets.map((market) => (
        <div key={market.pair} className="flex items-center justify-between p-3 rounded-lg hover:bg-surface transition-colors">
          <div>
            <div className="font-medium text-sm">{market.pair}</div>
            <div className="text-xs text-muted">{market.volume} vol</div>
          </div>
          <div className="text-right">
            <div className="font-mono text-sm">${market.price.toFixed(market.price < 1 ? 4 : 2)}</div>
            <div className={`flex items-center gap-1 text-xs ${market.change >= 0 ? 'text-success' : 'text-danger'}`}>
              {market.change >= 0 ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {Math.abs(market.change).toFixed(2)}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
