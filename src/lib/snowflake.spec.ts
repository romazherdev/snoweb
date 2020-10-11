import { Snowflake } from './snowflake';
import { Vector2D } from './vector2D';

describe('Snowflake', () => {
  describe('constructor', () => {
    it('should create a Snowflake', () => {
      const snowflake = new Snowflake(5, new Vector2D(0, 0));

      expect(snowflake).toBeInstanceOf(Snowflake);
    });
  });

  describe('get vector2D()', () => {
    it('should return copy of the provided to the constructor vector', () => {
      const vector = new Vector2D(5, 5);
      const snowflake = new Snowflake(5, vector);

      expect(snowflake.vector2D).toEqual(vector);
      expect(snowflake.vector2D).not.toBe(vector);
    });
  });

  describe('moveBy()', () => {
    it('should move the snowflake on the provided vector', () => {
      const vector = new Vector2D(1, 1);
      const snowflake = new Snowflake(5, vector);
      const force = new Vector2D(4, 4);

      snowflake.moveBy(force);

      expect(snowflake.vector2D.x).toBe(5);
      expect(snowflake.vector2D.y).toBe(5);
    });
  });

  describe('reset()', () => {
    it('should set vector2D to a copy of the initial value', () => {
      const initialPosition = new Vector2D(5, 5);
      const snowflake = new Snowflake(5, initialPosition);
      const force = new Vector2D(1, 1);

      snowflake.moveBy(force);
      snowflake.reset();

      expect(snowflake.vector2D).toEqual(initialPosition);
      expect(snowflake.vector2D).not.toBe(initialPosition);
    });
  });
});
