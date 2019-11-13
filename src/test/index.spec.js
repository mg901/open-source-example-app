const { sum } = require('..');

describe('sum', () => {
  it('return number', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
