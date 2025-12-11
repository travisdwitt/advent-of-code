const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');

function findMaxJoltage(bank) {
    const digits = bank.split('');
    const n = digits.length;
    let result = '';
    let remaining = 12;
    let startPos = 0;

    for (let pos = 0; pos < 12; pos++) {
        let maxDigit = '0';
        let bestIndex = -1;
        const latestStart = n - remaining;

        for (let i = startPos; i <= latestStart; i++) {
            if (digits[i] > maxDigit) {
                maxDigit = digits[i];
                bestIndex = i;
            }
        }

        result += maxDigit;
        startPos = bestIndex + 1;
        remaining--;
    }

    return BigInt(result);
}

let totalJoltage = BigInt(0);
for (const bank of input) {
    totalJoltage += findMaxJoltage(bank);
}

console.log(totalJoltage.toString());
