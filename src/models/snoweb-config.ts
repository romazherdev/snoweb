export interface SnowebConfig {
  /** Exact count of the snowflakes to be rendered. Might affect performance if the value is too big. */
  snowflakesCount: number;

  /** The higher the value the faster the snowflakes will fall */
  gravity: number;

  /** CSS color of the snowflakes */
  snowflakesColor: string;
}
