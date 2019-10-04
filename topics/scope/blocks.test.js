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

  describe('"var" declaration', () => {
    describe('when used in a block', () => {
      it('is hoisted and available anywhere in the function, thereby ignoring block scope', () => {
        // eslint-disable-next-line no-constant-condition
        if (true) {
          // eslint-disable-next-line vars-on-top, no-var
          var a = 2;
        }

        // eslint-disable-next-line block-scoped-var
        expect(a).to.equal(2);
      });
    });
  });

  describe('"let" declaration', () => {
    describe('when used in a block', () => {
      it('is not hoisted and only available in block scope', () => {
        // eslint-disable-next-line no-constant-condition
        if (true) {
          // eslint-disable-next-line prefer-const
          let a = 2;
          expect(a).to.equal(2);
        }

        expect(() => {
          // eslint-disable-next-line no-undef
          a;
        }).to.throw(ReferenceError);
      });
    });
  });

  describe('"const" declaration', () => {
    describe('when used in a block', () => {
      it('is not hoisted and only available in block scope', () => {
        // eslint-disable-next-line no-constant-condition
        if (true) {
          const a = 2;
          expect(a).to.equal(2);
        }

        expect(() => {
          // eslint-disable-next-line no-undef
          a;
        }).to.throw(ReferenceError);
      });
    });
  });
});
