class Vehicle {
    constructor(make, model, year){
        for (const arg of [make, model, year]) {
            if(!arg){
                throw new ConstructionError("Every vehicle needs a make, model, and year")
            }
        }
        this.make = make
        this.model = model
        this.year = year
    }
    honk(){
        return "Beep."
    }
    toString(){
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}
class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 4
    }
} //All unlisted functions from Vehicle will be inherited
class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 2
    }
    revEngine(){
        return "VROOM!!!"
    }
} //All unlisted functions from Vehicle will be inherited
class Garage {
    constructor(capacity){
        this.capacity = capacity
        this.vehicles = []
    }
    add(item){
        if(!(item instanceof Vehicle)){
            return "Only vehicles are allowed in here!"
        }
        if(this.vehicles.length === this.capacity){
            return "Sorry, we're full."
        }
        this.vehicles.push(item)
        return "Vehicle added!"
    }
}