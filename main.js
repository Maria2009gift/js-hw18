
// =====1=====

class Account {

    constructor({login, email}) {
        this.login = login
        this.email = email
    }

    getInfo() {
        return `Login: ${this.login}, Email: ${this.email}`
    }
}

const mangoid = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
})

console.log(mangoid.getInfo())

// =====2=====

class User {

    constructor({name, age, followers}) {
        this.name = name
        this.age = age
        this.followers = followers
    }

    getInfo() {
        return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    }
}

const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

console.log(mango.getInfo())

// =====3=====

class Storage {
    constructor(items) {
        this.items = items
    }

    getItems() {
        return this.items
    }

    addItem(item) {
        return this.items.push(item)
    }

    removeItem(item) {
        return this.items.splice(this.items.indexOf(item), 1)
    } 

}

const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems()
console.table(items)

storage.addItem('Дроїд')
console.table(storage.items)

storage.removeItem('Пролонгер')
console.table(storage.items)

// =====4=====

class StringBuilder {
    constructor(str){
        this._value = str
    }

    get value() {
        return this._value
    }

    append(str) {
        return this._value += str
    }

    prepend(str) {
        return this._value = str + this._value
    }

    pad(str) {
        return this._value = str + this._value + str
    }
}

const builder = new StringBuilder('.')

builder.append('^');
console.log(builder.value)

builder.prepend('^');
console.log(builder.value)

builder.pad('=');
console.log(builder.value)

// =====5=====

// Напиши клас Car із зазначеними властивостями і методами.
class Car {

    static getSpecs(car) {
        return console.log(car)
    }

    constructor({speed, price, maxSpeed, isOn, distance}) {
        this.maxSpeed = maxSpeed
        this.price = price
        this.isOn = isOn
        this.speed = speed
        this.distance = distance

  }


    get price() {
        return this._price
    }

    set price(newPrice) {
        return this._price = newPrice
    }

    turnOn() {
        return this.isOn = true
    }

    turnOff() {
        return this.isOn = false

    }

    accelerate(value) {
        if (value <= this.maxSpeed) {
            this.speed = value
        }
    }

    decelerate(value) {
        if (this.speed - value >= 0) {
            this.speed -= value
        }
        else {
            this.speed = 0
        }
    }

    drive(hours) {
        if (this.isOn === true) {
            this.distance = hours * this.speed
        }
        else {
            this.distance = 0
        }
    }
    }

const mustang = new Car({ maxSpeed: 200, price: 2000 })




mustang.turnOn()
mustang.accelerate(50)
mustang.drive(2)

Car.getSpecs(mustang)


console.log(mustang.price)
mustang.price = 4000
console.log(mustang.price)








