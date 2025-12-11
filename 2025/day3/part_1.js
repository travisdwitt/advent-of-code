const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');

/*
    .--._.--.--.__.--.--.__.--.--.__.--.--._.--.
  _(_      _Y_      _Y_      _Y_      _Y_      _)_
 [___]    [___]    [___]    [___]    [___]    [___]
 /:' \    /:' \    /:' \    /:' \    /:' \    /:' \
|::   |  |::   |  |::   |  |::   |  |::   |  |::   |
\::.  /  \::.  /  \::.  /  \::.  /  \::.  /  \::.  /
 \::./    \::./    \::./    \::./    \::./    \::./
  '='      '='      '='      '='      '='      '='
*/

let totalJoltage = 0;
for (const bank of input) {
    let maxJoltage = 0;

    for (let i = 0; i < bank.length - 1; i++) {
        for (let j = i + 1; j < bank.length; j++) {
            const joltage = parseInt(bank[i] + bank[j]);
            maxJoltage = Math.max(maxJoltage, joltage);
        }
    }
    totalJoltage += maxJoltage;
}

console.log(totalJoltage);
