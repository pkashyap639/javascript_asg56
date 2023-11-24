class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    honk() {
        console.log("Tuut tuut");
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: $${this.price}`);
    }

    race() {
        for (let turn = 1; turn <= 7; turn++) {
            this.gas -= this.calculateGasLoss();
            console.log(`Turn ${turn}: ${this.brand} has ${this.gas} liters of gas remaining.`);
        }
    }

    calculateGasLoss() {
        let gasLoss = 5; 

        if (this.year === new Date().getFullYear()) {
            gasLoss += 0; 
        } else {
            gasLoss += new Date().getFullYear() - this.year;
        }

        return gasLoss;
    }
}

const honda = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
const ford = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
const bmw = new Car("BMW", "X5", 2022, "Green", 60000, 65);
const mazda = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
const audi = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
const kia = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);

honda.honk();
ford.honk();
bmw.honk();
mazda.honk();
audi.honk();
kia.honk();

console.log("Race Scores:");
honda.race();
ford.race();
bmw.race();
mazda.race();
audi.race();
kia.race();