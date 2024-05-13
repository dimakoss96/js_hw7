/**
 * The object "services" with the specified parameters ("Стрижка", "Гоління", "Миття голови").
 * We set the "price" method in order to determine the amount of the cost of services in the object.
 */
var services = {
    "Стрижка": "60 грн",
    "Гоління": "80 грн",
    "Миття голови": "100 грн",
    price: function () {
        let servicesPrice = 0;
        for (let service in this) {
            if (typeof this[service] === 'function') {
                continue;              // Force transition to the next iteration
            }
                    let value = this[service].split(' ')[0];  //Getting a portion of a string that contains the numerical equivalent of the price
            servicesPrice = +value + servicesPrice;
        }
        console.log("Загальна вартість наданих послуг: " + servicesPrice);
    },
    maxValue: function () {       //We define the "maxValue" method to determine the maximum value of the service
        let numbers = [];
        for (let service in this) {
            if (typeof this[service] === 'function') {
                continue;
            }
            let value = this[service].split(' ')[0];
            numbers.push(+value);               //We add a numerical value to the array
        }
        let maxPrice = Math.max(...numbers);        //We select the maximum number in the array
        console.log("Максимальна вартість послуги: " + maxPrice);
    },
    minValue: function () {       //We define the "minValue" method to determine the minimum value of the service
        let numbers = [];
        for (let service in this) {
            if (typeof this[service] === 'function') {
                continue;
            }
            let value = this[service].split(' ')[0];
            numbers.push(+value);
        }
        let minPrice = Math.min(...numbers);            //We select the minimum number in the array
        console.log("Мінімальна вартість послуги: " + minPrice);
    }
};
services["Розбити скло"] = "200 грн";
services.price();
services.maxValue();
services.minValue();