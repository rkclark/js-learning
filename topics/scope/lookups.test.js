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

  describe('when not in strict mode', () => {
    it('will create a global variable on the fly if a LHS lookup cannot be resolved', () => {
      // eslint-disable-next-line no-undef
      iAmNowAGlobalVariable = 2;

      // eslint-disable-next-line no-undef
      expect(iAmNowAGlobalVariable).to.equal(2);
    });
  });

  describe('when in strict mode', () => {
    it('will throw a ReferenceError if a LHS lookup cannot be resolved', () => {
      expect(() => {
        /* eslint-disable */
        'use strict';
        /* eslint-enable */
        // eslint-disable-next-line no-undef
        b = 2;
      }).to.throw(ReferenceError);
    });
  });

  describe('when a RHS lookup fails', () => {
    it('will throw a ReferenceError', () => {
      expect(() => {
        // eslint-disable-next-line no-unused-vars, no-undef
        const a = b;
      }).to.throw(ReferenceError);
    });
  });

  describe('when an illegal operation is attempted with the result of a RHS lookup', () => {
    it('will throw a TypeError', () => {
      expect(() => {
        const b = [];
        b();
      }).to.throw(TypeError);
    });
  });
});
