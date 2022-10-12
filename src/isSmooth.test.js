const solution = require('./isSmooth.js');

test('test 1', () => {
    expect(solution([7, 2, 2, 5, 10, 7])).toBe(true);
});

test('test 2', () => {
    expect(solution([-5, -5, 10])).toBe(false);
});

test('test 3', () => {
    expect(solution([4, 2])).toBe(false);
});

test('test 4', () => {
    expect(solution([45, 23, 12, 33, 12, 453, -234, -45])).toBe(false);
});

test('test 5', () => {
    expect(solution([-12, 34, 40, -5, -12, 4, 0, 0, -12])).toBe(true);
});

test('test 6', () => {
    expect(solution([9, 0, 15, 9])).toBe(false);
});

test('test 7', () => {
    expect(solution([-6, 6, -6])).toBe(false);
});

test('test 8', () => {
    expect(solution([26, 26, -17])).toBe(false);
});

test('test 9', () => {
    expect(solution([-7, 5, 5, 10])).toBe(false);
});

test('test 10', () => {
    expect(solution([3, 4, 5])).toBe(false);
});

test('test 11', () => {
    expect(solution([-5, 3, -1, 9])).toBe(false);
});
