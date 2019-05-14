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

// Complete the plusMinus function below.
function plusMinus(arr) {
    let zeros = 0, positives = 0, negatives = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros++;
        } else if (arr[i] > 0) {
            positives++;
        } else {
            negatives++;
        }
    }

    let positivesFraction = (positives === 0 ? 0 : positives / arr.length);
    let negativesFraction = (negatives === 0 ? 0 : negatives / arr.length);
    let zerosFraction = (zeros === 0 ? 0 : zeros / arr.length);

    console.log(positivesFraction.toFixed(6));
    console.log(negativesFraction.toFixed(6));
    console.log(zerosFraction.toFixed(6));
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
