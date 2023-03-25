import React, { useRef } from 'react';
import { useGame } from './hooks/useGame';

export const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGame(containerRef);

  return <div id="container" ref={containerRef} />;
};
