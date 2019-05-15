'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    let time = s.substring(0, 2);

    if (s.includes("PM")) {
        if (time != "12") {
            s = s.replace(time, Number(time) + 12);
        }

        s = s.replace("PM", "");
    } else {
        if (time === "12") {
            s = s.replace(time, "00");
        }

        s = s.replace("AM", "");
    }

    return s;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
