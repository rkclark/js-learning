describe('functions/closures', () => {
  /* 
    Closure is when a function is able to remember and access its lexical
    scope even when that function is executing outside its lexical scope.
  */

  it("allows access to a function's scope after the function has run", () => {
    const makeAdderFn = x => {
      // parameter `x` is an inner variable

      // inner function `add()` uses `x`, so
      // it has a "closure" over it
      function add(y) {
        return y + x;
      }

      return add;
    };

    // `addOne` gets a reference to the inner `add(..)`
    // function with closure over the `x` parameter of
    // the outer `makeAdderFn(..)`
    const addOne = makeAdderFn(1);

    // `addTen` gets a reference to the inner `add(..)`
    // function with closure over the `x` parameter of
    // the outer `makeAdderFn(..)`
    const addTen = makeAdderFn(10);

    expect(addOne(3)).to.equal(4);

    expect(addTen(3)).to.equal(13);
  });

  // Another example
  it('allows a function to refer to its lexical scope when run outside that lexical scope', () => {
    function foo() {
      const a = 2;

      function bar() {
        return a;
      }

      return bar;
    }

    const baz = foo();

    // baz is a reference to bar, when run, bar "remembers" the value of a from its lexical scope
    // as it has a closure over that scope
    expect(baz()).to.equal(2);
  });

  describe('when a function uses closure over its lexical scope', () => {
    it('will use the current variable values defined there', done => {
      const countArray = [];

      // eslint-disable-next-line vars-on-top, no-var, no-plusplus
      for (var i = 1; i <= 5; i++) {
        // eslint-disable-next-line no-loop-func
        setTimeout(function timer() {
          countArray.push(i);
        }, i);
      }

      /*
        When the setTimeout callbacks run, the loop has finished running and terminates
        on the value of i == 6.
        Each callback has closure of i so pushes 6 into the array.
        You do not get the array [1, 2, 3, 4, 5] as you might expect.
      */
      setTimeout(() => {
        expect(countArray).to.eql([6, 6, 6, 6, 6]);
        done();
      }, 10);
    });
  });

  describe('to protect a function from using closed over values that have changed', () => {
    it('is necessary to give the function its own lexical scope to close over', done => {
      const countArray = [];

      // eslint-disable-next-line vars-on-top, no-var, no-plusplus
      for (var i = 1; i <= 5; i++) {
        // Const is not hoisted like var, and respects the for loop block scope
        // for each interation
        const j = i;
        // eslint-disable-next-line no-loop-func
        setTimeout(function timer() {
          countArray.push(j);
        }, j);
      }

      /*
        This time each i is copied to a block scoped const j for each iteration,
        so when the callback function runs it is referring to that closure rather than
        its closure over i.
      */
      setTimeout(() => {
        expect(countArray).to.eql([1, 2, 3, 4, 5]);
        done();
      }, 10);
    });
  });
});
