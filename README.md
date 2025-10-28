# Monad Multi-Agent Vibe Trader

A production-ready Base Mini App for automated cryptocurrency trading on Astar blockchain, powered by Monad's high-throughput infrastructure and AI-driven sentiment analysis.

## Features

- **Multi-Agent Strategy Orchestration**: Deploy and manage multiple trading agents simultaneously
- **Market Sentiment Analysis**: Real-time "vibe" scoring from social media, news, and on-chain data
- **Smart Contract Security**: Immutable agent logic deployed on Astar blockchain
- **On-Chain Audit Trails**: Complete transparency with verifiable trading history
- **Real-Time Performance Tracking**: Live P&L, trade counts, and portfolio analytics

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS with BASE theme
- **Blockchain**: Monad (EVM L1), Astar Network
- **Wallet**: OnchainKit, Coinbase Wallet
- **Charts**: Recharts for performance visualization

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Architecture

- `/app` - Next.js App Router pages and layouts
- `/app/components` - Reusable React components
- `/app/globals.css` - Global styles and theme variables
- `/.well-known` - Farcaster Mini App manifest

## Monad Integration

This app leverages Monad's capabilities:
- **Parallel Execution**: Handle multiple agent operations simultaneously
- **Ultra-Low Gas**: Cost-effective trading operations
- **10,000+ TPS**: High-throughput transaction processing
- **Instant Finality**: Immediate trade confirmations

## License

MIT
