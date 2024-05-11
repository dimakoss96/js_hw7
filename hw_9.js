function checkProbabilityTheory(count) {
    let countableNumber = 0;
    let uncountableNumber = 0;
    if (count <= 0) {
        console.log ("The value of the 'count' parameter must be greater than zero");
        return;
    }
    for (let i = 0; i < count; i++) {
        let number = Math.floor(Math.random() * (1000 - 100) + 100);
            //A mathematical function for calculating a random number in a given range
        if (number % 2 == 0) {
            //We determine whether this number is even or odd
            countableNumber++;
        } else {
            uncountableNumber++;
        }
    }
    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + countableNumber);
    console.log("Непарних чисел: " + uncountableNumber);
    let countableNumberPercent = countableNumber * 100 / count;  //We calculate the percentage of even numbers
    let uncountableNumberPercent = 100 - countableNumberPercent; //We calculate the percentage of odd numbers
    console.log(countableNumberPercent + " % " + uncountableNumberPercent);

}
checkProbabilityTheory(10);