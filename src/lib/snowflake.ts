import { Vector2D } from './vector2D';

export class Snowflake {
  private currentPosition: Vector2D;

  get vector2D(): Vector2D {
    return this.currentPosition;
  }

  constructor(
      private readonly size: number,
      private readonly initialPosition: Vector2D,
  ) {
    this.currentPosition = new Vector2D(initialPosition.x, initialPosition.y);
  }

  moveBy(vector: Vector2D): void {
    this.currentPosition.moveBy(vector);
  }

  reset(): void {
    this.currentPosition = new Vector2D(this.initialPosition.x, this.initialPosition.y);
  }
}
