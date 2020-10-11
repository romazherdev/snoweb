import { Vector2D } from './vector2D';

describe('Vector2D', () => {
  describe('constructor', () => {
    it('should create a Vector2D', () => {
      const vector = new Vector2D(1, 1);

      expect(vector).toBeInstanceOf(Vector2D);
    });
  });

  describe('get x()', () => {
    it('should return current X position', () => {
      const vector = new Vector2D(1, 2);

      expect(vector.x).toBe(1);
    });
  });

  describe('get y()', () => {
    it('get y() should return current Y position', () => {
      const vector = new Vector2D(1, 2);

      expect(vector.y).toBe(2);
    });
  });

  describe('moveBy()', () => {
    it('should move vector by provided vector', () => {
      const vector = new Vector2D(10, 20);
      const force = new Vector2D(5, 10);

      vector.moveBy(force);

      expect(vector.x).toBe(15);
      expect(vector.y).toBe(30);
    });
  });

  describe('moveTo()', () => {
    it('should move vector to provided vector', () => {
      const vector = new Vector2D(10, 20);
      const force = new Vector2D(5, 10);

      vector.moveTo(force);

      expect(vector.x).toBe(5);
      expect(vector.y).toBe(10);
    });
  });
});
