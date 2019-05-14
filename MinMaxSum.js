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

// Complete the miniMaxSum function below.
// Instead of sorting the array I'm searching the max and min value and using them
// to calculate the sum of the higher and lower values
function miniMaxSum(arr) {
    let arraySum = arr[0], maxValue = arr[0], minValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        arraySum = arraySum + arr[i];
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        } else if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }

    console.log((arraySum - maxValue) + ' ' + (arraySum - minValue));
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
