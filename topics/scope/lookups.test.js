describe('scope/lookups', () => {
  describe('in this function', () => {
    it('has the following left and right hand side lookups', () => {
      // LHS lookup for a
      function foo(a) {
        // LHS lookup for b, RHS lookup for a
        const b = a;
        // RHS lookups for a and b
        return a + b;
      }

      // LHS lookup for C, RHS for foo()
      // eslint-disable-next-line no-unused-vars
      const c = foo(2);
    });
  });
});
