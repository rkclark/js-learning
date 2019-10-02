describe('scope/blocks', () => {
  describe('explicit blocks', () => {
    it('can be used to contain code in its own scope', () => {
      {
        const bar = 42;
        expect(bar).to.equal(42);
      }

      expect(() => {
        // eslint-disable-next-line no-undef
        bar;
      }).to.throw(ReferenceError);
    });
  });
});
