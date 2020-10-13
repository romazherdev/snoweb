import { Destroyable, SnowebConfig } from '../models';
import { DEFAULT_SNOWEB_CONFIG } from '../consts/default-snoweb-config';
import { Snowflake } from './snowflake';

export class Snoweb implements Destroyable {
  static CLASS_NAME = 'snoweb-container';

  private readonly config: SnowebConfig;

  private domElement!: HTMLElement;
  private snowflakes: Snowflake[] = [];
  private started: boolean = false;

  constructor(config?: Partial<SnowebConfig>) {
    this.config = { ...DEFAULT_SNOWEB_CONFIG, ...config };
  }

  /** Begin the snowfall. Ho-ho-ho 🎅 */
  start(): void {
    if (!this.started) {
      this.started = true;
      this.createDOMElement();
      this.createSnowflakes();
      this.render();
    }
  }

  /** Stop the snowfall */
  stop(): void {
    throw new Error('Method not implemented');
  }

  /** Destroy the snowfall immediately */
  destroy(): void {
    if (this.domElement?.parentElement) {
      this.domElement.parentElement.removeChild(this.domElement);
    }
  }

  render(): void {
    this.snowflakes.forEach(s => {
      s.fall(this.config.gravity);
    });

    if (this.started) {
      requestAnimationFrame(this.render.bind(this));
    }
  }

  private createDOMElement(): void {
    if (!this.domElement) {
      this.domElement = document.createElement('div');
      this.domElement.classList.add(Snoweb.CLASS_NAME);
      document.body.appendChild(this.domElement);
    }
  }

  private createSnowflakes(): void {
    this.destroyAllSnowflakes();

    if (this.domElement) {
      for (let i = 0; i < this.config.snowflakesCount; i++) {
        const size = Math.random() * (0.5 - 0.25) + 0.25;
        const startX = Math.random() * window.innerWidth
        const startY = -(Math.random() * (window.innerHeight - 25) + 25)
        const sf = new Snowflake(size, startX, startY);
        this.domElement.appendChild(sf);
        this.snowflakes.push(sf);
      }
    }
  }

  private destroyAllSnowflakes(): void {
    this.snowflakes.forEach(s => s.destroy());
    this.snowflakes = [];
  }
}
