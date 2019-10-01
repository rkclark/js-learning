describe('functions/closures', () => {
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
});
