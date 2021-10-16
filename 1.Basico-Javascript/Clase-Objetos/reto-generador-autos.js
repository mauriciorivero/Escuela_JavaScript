//Este código fue desarrollado como aporte de Juan Camilo Alvarez Jurado
var brands = ['Toyota', 'Mazda', 'Renault']
var cars = []

class Car {
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }
}

for (var i = 0; i < 30; i++)
    cars.push(new Car(brands[Math.floor(i/10)], `Serie ${i % 10}`, 1999 + i % 10))

console.log(cars)