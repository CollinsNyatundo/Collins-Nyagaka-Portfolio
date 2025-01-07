import React from 'react';

interface HourglassLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12'
};

const getSize = (size: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm': return '16px';
    case 'md': return '32px';
    case 'lg': return '48px';
    default: return '32px';
  }
};

const HourglassLoader = ({ size = 'md', className = '' }: HourglassLoaderProps) => {
  const uibSize = getSize(size);
  
  return (
    <div className={`${sizes[size]} ${className}`} role="status">
      <div
        style={{
          '--uib-size': uibSize,
          '--uib-color': 'rgb(168, 85, 247)',
          '--uib-speed': '1.75s',
          '--uib-bg-opacity': '0.1',
        } as React.CSSProperties}
        className="relative flex flex-col h-[var(--uib-size)] w-[var(--uib-size)] animate-hourglass"
      >
        <div className="absolute flex items-center justify-center overflow-hidden isolate top-[8.25%] left-[8.25%] w-[calc(var(--uib-size)*0.435)] h-[calc(var(--uib-size)*0.435)] rounded-[50%_50%_calc(var(--uib-size)/15)]">
          <div className="absolute inset-0 bg-[var(--uib-color)] opacity-[var(--uib-bg-opacity)]" />
          <div className="relative z-[1] block bg-[var(--uib-color)] h-full w-full origin-bottom-right rounded-[0_0_calc(var(--uib-size)/20)_0] animate-flow" />
        </div>
        <div className="absolute flex items-center justify-center overflow-hidden isolate bottom-[8.25%] right-[8.25%] w-[calc(var(--uib-size)*0.435)] h-[calc(var(--uib-size)*0.435)] rounded-[50%_50%_calc(var(--uib-size)/15)] rotate-180 self-end">
          <div className="absolute inset-0 bg-[var(--uib-color)] opacity-[var(--uib-bg-opacity)]" />
          <div className="relative z-[1] block bg-[var(--uib-color)] h-full w-full origin-bottom-right rounded-[0_0_calc(var(--uib-size)/20)_0] animate-flow-reverse" />
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default HourglassLoader;