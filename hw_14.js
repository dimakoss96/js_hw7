const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ],
    findBy: function (companyName) {
        let result = find(this.clients, companyName);
        if (result != null) {       // If something is found by the recursive search - output the result
            console.log("Знайдено компанію:");
            console.log("Назва: " + result.name);
            console.log("Тип компанії: " + result.type);
            console.log("Використовуємоє рішення: " + result.uses);
            console.log("Продає: " + result.sells);
        }
        else {
            console.log("Компанію '" + companyName + "' не знайдено");
        }
    }
};


function find(clients, companyName) {       // Recursive function to search in companies
    for (let client of clients) {
        let result = null;
        if (client.name === companyName) {      // Search by company name
            result = client;
        }
        if (result == null && client.partners != null) {        // If nothing is found - search in partners
            result = find(client.partners, companyName);
        }
        if (result != null) {       // Return the result only if something is found
            return result;
        }
    }

    return null;        // Nothing found in any subobject
}

company.findBy('Клієнт 1');
console.log("----------------------");

company.findBy('Клієнт 2');
console.log("----------------------");

company.findBy('Клієнт 1.2');
console.log("----------------------");

company.findBy('Клієнт 1.2.3');
console.log("----------------------");

company.findBy('Клієнт, що не існує');