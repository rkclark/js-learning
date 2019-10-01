describe('syntax/conditionals', () => {
  describe('else if', () => {
    it('has the following syntax', () => {
      const a = 10;

      if (a === 2) {
        throw new Error();
      } else if (a === 10) {
        expect(true).to.equal(true);
      }
    });
  });

  describe('switch', () => {
    it('has the following syntax', () => {
      const a = 10;

      switch (a) {
        case 2:
          throw new Error();
        case 10:
          expect(true).to.equal(true);
          break;
        case 42:
          throw new Error();
        default:
          throw new Error();
      }
    });
  });
});
