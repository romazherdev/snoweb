import { Snoweb } from './snoweb';

describe('Snoweb', () => {
  describe('constructor', () => {
    it('should create an instance of Snoweb', () => {
      const snoweb = new Snoweb();

      expect(snoweb).toBeInstanceOf(Snoweb);
    });
  });
});
