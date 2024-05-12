function checkProbabilityTheory(count) {
    let min = 100;
    let max = 1000;
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        // We generate a random number in the range from min to max
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        // We check whether the number is even or odd
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    // We calculate the percentage ratio of even to odd
    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;

    // We output information
    console.log("Кількість згенерованих чисел:", count);
    console.log("Парних чисел:", evenCount);
    console.log("Не парних чисел:", oddCount);
    console.log("Відсоток парних до не парних:", evenPercentage.toFixed(2) + "%", "до", oddPercentage.toFixed(2) + "%");
}

checkProbabilityTheory(1000);