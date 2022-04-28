let n = 4;
let pattern = "";
let count = 1;

for (let columns = 1; columns <= n; columns++) {
    for (let rows = 1; rows <= columns; rows++) {
        pattern += count;
        count++;
    }
    pattern += "\n";
}

console.log(pattern);