function solution(arr) {
    const middle = arr.length % 2 === 0 ? arr[arr.length / 2] + arr[arr.length / 2 - 1] : arr[Math.floor(arr.length / 2)];
    return arr[0] === arr[arr.length - 1] && arr[0] === middle;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test isSmooth

// alternative solution
