describe('scope/eval', () => {
  describe('when not in strict mode', () => {
    it('will modifiy the lexical scope environment dynamically (i.e. at run time rather than at author-time)', () => {
      const b = 2;

      function foo(str, a) {
        // eslint-disable-next-line no-eval
        eval(str);

        // b should be 2 from the outer scope, but eval-ing the string overrides this at run time within the inner scope
        return a + b;
      }

      expect(foo('var b = 3;', 1)).to.equal(4);
    });
  });

  describe('when in strict mode', () => {
    it('operates within its own lexical scope so will not affect the surrounding scope', () => {
      const b = 2;

      function foo(str, a) {
        /* eslint-disable */
        'use strict';
        /* eslint-enable */

        // eslint-disable-next-line no-eval
        eval(str);

        // b remains 2 from the outer scope as the eval is forced to operate only in its own scope
        return a + b;
      }

      expect(foo('var b = 3;', 1)).to.equal(3);
    });
  });
});
