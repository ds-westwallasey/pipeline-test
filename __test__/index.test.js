describe("Group of randome tests", () => {
  test("numbers match", () => {
    const x = 2;
    const y = 2;

    expect(x).toBe(y);
  });

  test("word has correct letters", () => {
    const word = "hello";

    expect(word.length).toBe(5);
  });

  test("is a truthy value", () => {
    const lovesFood = "truthy";
    expect(lovesFood).toBeTruthy();
  });

  test("is a falsy value", () => {
    const isFalse = 0;
    expect(isFalse).toBeFalsy();
  });
});
