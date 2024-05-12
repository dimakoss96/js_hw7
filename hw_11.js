// Сreating an object with 3 properties
    const myObject = {
    device: "Iphone",
    model: 15,
    color: "Black",
    // We take the getInfo() method, which displays all properties of the object in the form of "key: value" pairs
    getInfo: function() {
        // We create an empty string to store information about properties
        let info = "";

        // Let's go through each property of the object
        for (let key in this) {
            // We check whether the property belongs to the object itself (not the prototype)
            if (this.hasOwnProperty(key)) {
                // Add the "key: value" pair to the info line
                info += `${key}: ${this[key]}\n`;
            }
        }

        // We display information through the console
        console.log(info);
    }
};

// All information about the object
myObject.getInfo();

// Add new property
myObject.newProperty = 'Нова властивість!';

// We display updated information about the object
myObject.getInfo();