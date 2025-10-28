'use client';

interface VibeIndicatorProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
}

export function VibeIndicator({ score, size = 'md' }: VibeIndicatorProps) {
  const getVariant = (score: number): 'positive' | 'neutral' | 'negative' => {
    if (score >= 60) return 'positive';
    if (score >= 40) return 'neutral';
    return 'negative';
  };

  const variant = getVariant(score);
  
  const colors = {
    positive: 'bg-success',
    neutral: 'bg-warning',
    negative: 'bg-danger'
  };

  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  return (
    <div className={`${sizes[size]} ${colors[variant]} rounded-full animate-pulse`} />
  );
}
