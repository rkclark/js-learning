/* eslint-disable eqeqeq */
describe('types/equality', () => {
  describe('"==" (equality with coercion allowed)', () => {
    describe('when values are of same type', () => {
      it('does not need to coerce types to calculate equality', () => {
        // eslint-disable-next-line no-self-compare
        expect('hello' == 'hello').to.equal(true);
      });
    });

    describe('when values are of different type', () => {
      it('coerces types to attempt to calculate equality', () => {
        // An example where it may make sense to use it, if can be sure
        // that values will only ever be string or number
        expect('12' == 12).to.equal(true);

        // These examples are likely less useful / more dangerous
        expect(undefined == null).to.equal(true);
        expect([] == '').to.equal(true);
      });
    });
  });
});
