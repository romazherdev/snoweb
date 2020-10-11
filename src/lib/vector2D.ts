export class Vector2D {
  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  constructor(
      private _x: number,
      private _y: number,
  ) {}

  moveBy(vector: Vector2D): void {
    this._x += vector._x;
    this._y += vector._y;

  }

  moveTo(vector: Vector2D): void {
    this._x = vector._x;
    this._y = vector._y;
  }
}
