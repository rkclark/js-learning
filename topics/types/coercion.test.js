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

    describe('boolean coercion', () => {
      describe('all the falsy values in js', () => {
        const falsyValues = [
          { value: '', desc: 'an empty string' },
          { value: 0, desc: '0' },
          { value: -0, desc: '-0' },
          { value: NaN, desc: 'NaN' },
          { value: null, desc: 'null' },
          { value: undefined, desc: 'undefined' },
          { value: false, desc: 'false' },
        ];

        falsyValues.forEach(({ value, desc }) => {
          describe(desc, () => {
            it('coerces to falsy boolean', () => {
              expect(Boolean(value)).to.equal(false);
            });
          });
        });
      });

      describe('truthy values', () => {
        const truthyValues = [
          { value: 'string', desc: 'a string' },
          { value: [], desc: 'an array' },
          { value: 12, desc: 'a number' },
          { value: {}, desc: 'an object' },
          { value: true, desc: 'true' },
          { value: () => {}, desc: 'a function' },
        ];

        truthyValues.forEach(({ value, desc }) => {
          describe(desc, () => {
            it('coerces to truthy boolean', () => {
              expect(Boolean(value)).to.equal(true);
            });
          });
        });
      });
    });
  });

  describe('implicit coercion', () => {
    describe('when a string is used in a number expression', () => {
      it('is implicitly coerced into a number by js', () => {
        const a = '42';
        const b = a * 2;

        expect(b).to.equal(84);
      });
    });
  });
});
