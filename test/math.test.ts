import {add, substract, multiply} from "../math";

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('substracts 1 - 2 to equal -1', () => {
  expect(substract(1, 2)).toBe(-1);
});

test('multiplies 2 * 2 to equal 4', () => {
  expect(multiply(2, 2)).toBe(4);
});
