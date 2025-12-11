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

let removed = 0;
while (true) {
    let remove = [];

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
                    remove.push([r, c]);
                }
            }
        }
    }

    if (remove.length === 0){
        break
    };

    for (const [r, c] of remove) {
        grid[r][c] = '.';
    }
    removed += remove.length;
}

console.log(removed);
