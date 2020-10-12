import { Destroyable, SnowebConfig } from '../models';
import { DEFAULT_SNOWEB_CONFIG } from '../consts/default-snoweb-config';
import { SNOWFLAKE_SVG } from '../consts/snowflake-svg';

export class Snoweb implements Destroyable {
  private readonly config: SnowebConfig;

  constructor(config?: Partial<SnowebConfig>) {
    this.config = { ...DEFAULT_SNOWEB_CONFIG, ...config };
  }

  /** Begin the snowfall. Ho-ho-ho 🎅 */
  start(): void {
    const el =document.createElement('div');
    el.innerHTML = SNOWFLAKE_SVG;
    document.body.appendChild(el);
    throw new Error('Method not implemented');
  }

  /** Stop the snowfall */
  stop(): void {
    throw new Error('Method not implemented');
  }

  /** Destroy the snowfall immediately */
  destroy(): void {
    throw new Error('Method not implemented');
  }
}
