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

    describe('when dealing with a non-primitive and primitive', () => {
      it('can coerce the non-primitive', () => {
        // Arrays are coerced to strings
        expect([1, 2, 3] == '1,2,3').to.equal(true);
      });
    });

    describe('when dealing with two non-primitives', () => {
      it('compares the values by reference so will return false', () => {
        const a = {};
        const b = {};
        expect(a == b).to.equal(false);
      });
    });
  });

  describe('"===" (equality with coercion disallowed)', () => {
    describe('when values and types are the same', () => {
      it('returns true', () => {
        // eslint-disable-next-line no-self-compare
        expect('hello' === 'hello').to.equal(true);
        // eslint-disable-next-line no-self-compare
        expect(42 === 42).to.equal(true);
      });
    });

    describe('when values and types are different', () => {
      it('returns false', () => {
        expect('42' === 42).to.equal(false);
      });
    });

    describe('when dealing with two non-primitives', () => {
      it('compares the values by reference so will return false', () => {
        const a = {};
        const b = {};
        expect(a === b).to.equal(false);
      });
    });
  });

  describe('inequality operators (<, >, <=, >=)', () => {
    describe('when comparing a number to a string', () => {
      it('will always attempt to coerce the string to a number (has no "strict" version)', () => {
        const a = 41;
        const b = '42';

        expect(a < b).to.equal(true);
      });

      describe('if the string cannot be coerced to a number', () => {
        it('will coerce it to NaN and use that for the comparison', () => {
          const a = 41;
          const b = 'cannot be a number!';

          // NaN can never be greater or less than another value, so all these return false!
          expect(a < b).to.equal(false);
          expect(a > b).to.equal(false);
          expect(a == b).to.equal(false);
        });
      });
    });

    describe('when comparing two strings', () => {
      it('will compare lexigraphically (i.e. alphabetical order)', () => {
        const a = 'a';
        const b = 'b';

        expect(a < b).to.equal(true);
        expect(a > b).to.equal(false);
        expect(a == b).to.equal(false);
      });
    });
  });
});
