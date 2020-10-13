import { Destroyable } from '../models';
import { SNOWFLAKE_SVG } from '../consts/snowflake-svg';

export class Snowflake extends HTMLElement implements Destroyable {
  static SELECTOR = 'snoweb-snowflake';

  constructor(
      private readonly size: number = 1,
      private readonly startX: number = 0,
      private readonly startY: number = 0,
  ) {
    super();

    this.innerHTML = SNOWFLAKE_SVG;
    this.style.setProperty('transform', `scale(${this.size})`);
    this.style.setProperty('left', `${startX}px`);
    this.style.setProperty('top', `${startY}px`);
  }

  fall(gravity: number): void {
    const currentTop = Number(this.style.getPropertyValue('top').replace('px', ''));
    const newTop = currentTop + gravity * this.size;

    if (newTop < window.innerHeight) {
      this.style.setProperty('top', `${newTop}px`);
    } else {
      this.reset();
    }
  }

  reset(): void {
    this.style.setProperty('left', `${this.startX}px`);
    this.style.setProperty('top', `${this.startY}px`);
  }

  destroy(): void {
    if (this.parentElement) {
      this.parentElement.removeChild(this);
    }
  }
}

customElements.define(Snowflake.SELECTOR, Snowflake);
