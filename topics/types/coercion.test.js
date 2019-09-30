describe('types/coercion', () => {
  describe('explicit coercion', () => {
    describe('when a variable type is explicity changed', () => {
      it('takes the new type', () => {
        const a = '42';
        const b = Number(a);

        expect(a).to.equal('42');
        expect(typeof a).to.equal('string');
        expect(b).to.equal(42);
        expect(typeof b).to.equal('number');
      });
    });
  });
});
