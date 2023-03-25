import { Application } from 'pixi.js';

export class Game {
  private app: Application;

  constructor(width: number, height: number) {
    this.app = new Application({
      background: '#1099bb',
      width,
      height,
      antialias: true,
    });
  }

  public get view(): HTMLCanvasElement {
    return this.app.view as HTMLCanvasElement;
  }

  public resize(width: number, height: number): void {
    this.app.renderer.resize(width, height);
    this.app.render();
  }

  public destroy(): void {
    this.app.destroy();
  }
}
