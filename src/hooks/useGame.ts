import { useEffect, useState } from 'react';
import { Game } from '../game/Game';

type ContainerRef = React.RefObject<HTMLDivElement>;

export const useGame = (containerRef: ContainerRef): Game | null => {
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container == null) {
      return;
    }

    const localGame = new Game(container.clientWidth, container.clientHeight);

    container.appendChild(localGame.view);

    const resizeObserver = new ResizeObserver(() => {
      localGame.resize(container.clientWidth, container.clientHeight);
    });

    resizeObserver.observe(container);

    setGame(localGame);

    return () => {
      resizeObserver.disconnect();
      container.removeChild(localGame.view);
      localGame.destroy();
    };
  }, []);

  return game;
};
