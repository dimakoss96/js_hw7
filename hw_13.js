let example = [1, 2, 3, 4, 5, 6, 7, 8, 9]       // Define a numeric array "example"
function myBlend(arr) {
    for (let i = 0; i <= arr.length * 2; i++) {     // For loop to repeat the operation of changing the position of an array element
        let firstElementPosition = Math.floor(Math.random() * (arr.length - 0) + 0);        // Calculating a random position of an array element
        let secondElementPosition = Math.floor(Math.random() * (arr.length - 0) + 0);
        const firstElement = arr[firstElementPosition];     // Storing the value of an array element in a variable
        const secondElement = arr[secondElementPosition];
        arr[firstElementPosition] = secondElement;      // Swapping array elements
        arr[secondElementPosition] = firstElement;
    }
}
myBlend(example);
console.log(example);