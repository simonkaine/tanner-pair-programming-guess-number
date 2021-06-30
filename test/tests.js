import { checkNumber } from '../utils.js';

const test = QUnit.test;

test('number is less than target number', (expect) => {
    const number = 10;
    const expected = 'number lower than target number';
    const actual = checkNumber(9, number);
    expect.equal(actual, expected);
});
test('number is higher than target number', (expect) => {
    const number = 10;
    const expected = 'number higher than target number';
    const actual = checkNumber(11, number);
    expect.equal(actual, expected);
});
test('number is equal to target number', (expect) => {
    const number = 10;
    const expected = 'YOU WIN!';
    const actual = checkNumber(10, number);
    expect.equal(actual, expected);
});
