function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row = row + symbol;
        }
        console.log(row);
    }
}
function reverseTriangle(height, symbol) {
    for (let i = heigh; i >= 1; i--) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row = row + symbol;
        }
        console.log(row);
    }
}
drawTriangle(5, "*");
reverseTriangle(5, "*");
