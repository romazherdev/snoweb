import { Destroyable, SnowebConfig } from '../models';
import { DEFAULT_SNOWEB_CONFIG } from '../consts/default-snoweb-config';

export class Snoweb implements Destroyable {
  private readonly config: SnowebConfig;

  constructor(config: Partial<SnowebConfig>) {
    this.config = { ...DEFAULT_SNOWEB_CONFIG, ...config };
  }

  /** Begin the snowfall. Ho-ho-ho 🎅 */
  start(): void {
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
