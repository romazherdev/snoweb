import { Destroyable } from '../models';
import { SNOWFLAKE_SVG } from '../consts/snowflake-svg';

export class Snowflake extends HTMLElement implements Destroyable {
  static SELECTOR = 'snoweb-snowflake';

  constructor(
      private readonly size: number = 1,
      private readonly startX: number = 0,
      private readonly startY: number = 0,
      private readonly color: string,
  ) {
    super();

    this.innerHTML = SNOWFLAKE_SVG.replace('{color}', color);
    this.setScale(size);
    this.setLeft(startX);
    this.setTop(startY);
  }

  fall(gravity: number): void {
    if (!this.isFell()) {
      this.setTop(this.getTop() + gravity * this.size);
    }
  }

  resetToInitialPosition(): void {
    this.setLeft(this.startX);
    this.setTop(this.startY);
  }

  destroy(): void {
    if (this.parentElement) {
      this.parentElement.removeChild(this);
    }
  }

  getLeft(): number {
    return Number(this.style.getPropertyValue('left').replace('px', ''));
  }

  getTop(): number {
    return Number(this.style.getPropertyValue('top').replace('px', ''));
  }

  isFell(): boolean {
    return this.getTop() > window.innerHeight;
  }

  private setLeft(val: number): void {
    this.style.setProperty('left', `${val}px`);
  }

  private setTop(val: number): void {
    this.style.setProperty('top', `${val}px`);
  }

  private setScale(scale: number): void {
    this.style.setProperty('transform', `scale(${scale})`);
  }
}

customElements.define(Snowflake.SELECTOR, Snowflake);
