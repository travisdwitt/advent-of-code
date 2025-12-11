const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');
const grid = input.map(line => line.split(''));
const rows = grid.length;
const cols = grid[0].length;
const directions = [
    [-1, -1], [-1, 0], [-1, 1], [0, -1],
    [0, 1], [1, -1],  [1, 0],  [1, 1]
];

/*
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣤⡤⠤⠤⠤⠤⠤⠤⢤⣤⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⡄⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠸⣷⠀⠀⠀⠀⠀⠀⣿⠀⣶⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⠀⣿⣿⣦⠀⠀⠀⠀⠀⢻⣇⠀⠀⠀⠀⠀⣉⣀⣉⠀⠀⠀⠀⠀⠀
⠀⢠⣤⣤⣬⣤⣌⠙⢿⡆⠀⠀⠀⢀⣈⣿⡄⠀⠀⠀⠀⣨⠉⣅⠀⠀⠀⠀⠀⠀
⠀⢸⡿⠟⠛⠛⠿⣷⣄⠑⢠⣴⣶⠟⠛⠛⠓⠀⠀⠀⠀⣿⠀⣿⠀⠀⠀⠀⠀⠀
⠀⠈⣠⣾⣿⣷⣦⡈⢻⣷⣤⣤⣤⣴⡿⠟⠛⠛⠳⣄⠀⣿⠀⠛⠛⠛⠛⠛⠂⠀
⠀⢰⣿⡇⠀⠈⣿⣷⠀⣿⣿⣿⣿⡟⢀⣴⠿⢿⣦⠈⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠈⢿⣷⣶⣶⡿⠋⠀⠀⠀⠀⠀⠀⠘⢿⣤⣴⡿⠀⠀⠿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
*/

let count = 0;

for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        if (grid[r][c] === '@') {
            let adjacent = 0;

            for (const [x, y] of directions) {
                const nr = r + x;
                const nc = c + y;

                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === '@') {
                    adjacent++;
                }
            }

            if (adjacent < 4) {
                count++;
            }
        }
    }
}

console.log(count);
