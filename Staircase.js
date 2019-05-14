'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {
    for (let i = 0; i < n; i++) {
        let numSymbol = i + 1;
        let numSpaces = n - numSymbol;
        let string = '';

        for (let j = 0; j < numSpaces; j++) {
            string = string + ' ';
        }
        for (let k = 0; k < numSymbol; k++) {
            string = string + '#';
        }

        console.log(string);
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
