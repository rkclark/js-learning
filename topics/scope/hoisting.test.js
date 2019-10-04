describe('scope/hoisting', () => {
  describe('when a program is run', () => {
    it('hoists and performs "var" declarations during the compilation phase', () => {
      // Can use the hoisted var before the line where it is defined
      // eslint-disable-next-line no-use-before-define, prefer-const
      a = 2;

      // eslint-disable-next-line vars-on-top, no-var
      var a;

      expect(a).to.equal(2);
    });

    it('hoists and performs "function" declarations during the compilation phase', () => {
      let a;

      // Can use the hoisted fn before the line where it is defined
      // eslint-disable-next-line no-use-before-define
      setA();

      function setA() {
        a = 2;
      }

      expect(a).to.equal(2);
    });

    it('does not hoist "let" declarations', () => {
      expect(() => {
        // eslint-disable-next-line no-use-before-define, prefer-const
        a = 2;

        // eslint-disable-next-line vars-on-top, no-var, no-unused-vars
        let a;
      }).to.throw(ReferenceError);
    });
  });
});
