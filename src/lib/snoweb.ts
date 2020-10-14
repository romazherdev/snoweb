import { Destroyable, SnowebConfig } from '../models';
import { DEFAULT_SNOWEB_CONFIG } from '../consts/default-snoweb-config';
import { Snowflake } from './snowflake';

export class Snoweb implements Destroyable {
  static CLASS_NAME = 'snoweb-container';

  private readonly config: SnowebConfig;

  private domContainerElement!: HTMLElement | null;
  private snowflakes: Snowflake[] = [];
  private started: boolean = false;

  // this callback function (if exists) is being called after all the snowflakes have fallen
  private afterStopCallback?: () => void;

  // this needs to determine whether the render() is being called via requestAnimationFrame() or not
  // in order to not call render() twice on each frame
  private isFrameRequested: boolean = false;

  constructor(config?: Partial<SnowebConfig>) {
    this.config = { ...DEFAULT_SNOWEB_CONFIG, ...config };
  }

  /** Begin the snowfall. Ho-ho-ho 🎅 */
  start(): void {
    if (this.isStarted()) {
      return;
    }

    this.started = true;

    if (!this.domContainerElement) {
      this.createDOMElement();
      this.createSnowflakes();
    }

    if (!this.isFrameRequested) {
      this.render();
    }
  }

  /** Stop the snowfall */
  stop(afterStopCallback?: () => void): void {
    if (this.isStarted()) {
      this.started = false;
      this.afterStopCallback = afterStopCallback;
    } else {
      console.warn('The snowfall is already being stopped.');
    }
  }

  /** Destroy the snowfall immediately */
  destroy(): void {
    if (this.domContainerElement?.parentElement) {
      this.domContainerElement.parentElement.removeChild(this.domContainerElement);
      this.domContainerElement = null;
    } else {
      console.warn('Snoweb element either already destroyed or was not created at all.')
    }
  }

  isStarted(): boolean {
    return this.started;
  }

  // this creates falling animation
  private render(): void {
    let isEverySnowflakeFellDown: boolean = true;

    this.snowflakes.forEach(snowflake => {
      snowflake.fall(this.config.gravity);

      if (snowflake.isFell() && this.isStarted()) {
        snowflake.resetToInitialPosition();
      }

      isEverySnowflakeFellDown = isEverySnowflakeFellDown && snowflake.isFell();
    });

    this.isFrameRequested = !isEverySnowflakeFellDown;
    isEverySnowflakeFellDown ? this.afterStopCallback?.() : requestAnimationFrame(this.render.bind(this));
  }

  // creates container for snowflakes
  private createDOMElement(): void {
    if (!this.domContainerElement) {
      this.domContainerElement = document.createElement('div');
      this.domContainerElement.classList.add(Snoweb.CLASS_NAME);
      document.body.appendChild(this.domContainerElement);
    }
  }

  // creates snowflakes inside the domContainerElement
  private createSnowflakes(): void {
    this.destroyAllSnowflakes();

    if (this.domContainerElement) {
      for (let i = 0; i < this.config.snowflakesCount; i++) {
        const size = Math.random() * (0.5 - 0.25) + 0.25;
        const startX = Math.random() * window.innerWidth
        const startY = -(Math.random() * (window.innerHeight - 25) + 25)
        const sf = new Snowflake(size, startX, startY, this.config.snowflakesColor);
        this.domContainerElement.appendChild(sf);
        this.snowflakes.push(sf);
      }
    }
  }

  private destroyAllSnowflakes(): void {
    this.snowflakes.forEach(s => s.destroy());
    this.snowflakes = [];
  }
}
