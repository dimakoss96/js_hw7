function pow(x, y) {
    let result = 1;
    if (y > 0) {
        for (let i = 0; i < y; i++) { // підносимо до плюсового ступеня
            result = result * x;
        }
        console.log(result);
    } else if (y === 0) { // підносимо до 0
        console.log(result);
    } else {
        for (let i = 0; i < -y; i++) { // підносимо до мінусового ступеня
            result = result / x;
        }
        console.log(result);
    }
}

pow(2, -3);