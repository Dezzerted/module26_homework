import { sum, multiply, reverseString } from "../functions.js";

describe("test functions examples", () => {
  const str = 'abcd';
  const rts = 'dcba';

  it("test 1 + 2 = 3 and 1 * 2 = 2", () => {
    expect(sum(1, 2)).toBe(3);
    expect(multiply(1, 2)).toBe(2);
  }),

  it("reverse string", () => {
    expect(reverseString(str)).toBe(rts);
  }),
  
  it("oject is equal to object", () => {
    const fruits = {
      name: 'apple',
    };
    fruits['weight'] = '100g';
    expect(fruits).toEqual({name: 'apple', weight: '100g'})
  })
});
