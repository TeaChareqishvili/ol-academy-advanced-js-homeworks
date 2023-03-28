

// homework 

 function Car (make, model, year ){
    this.make = make;
    this.model = model;
    this.year = year;
    this.getCarInfo = function (){
          return this.make + " " + this.model + " " + "released in " + this.year;
    };
    this.owners = [];
    this.addOwner = function(Person){
        return this.owners.push(Person);
    };
    this.removeOwner = function(Person){
        let index = this.owners.indexOf(Person);
        if (index > -1) {
            this.owners.splice(index, 1);
        }
   };
   this.getOwnersCount = function(){
    return this.owners.length
   };
   this.getOwnerNames = function() {
    let names = [];
    for (let i = 0; i < this.owners.length; i++) {
        names.push(this.owners[i].fullName());
    }
    
    return names;
   };
    this.getFullInfo = function(){
         return this.make + " " + this.model + " " + " from " + this.year + ". " + this.getOwnersCount() + " " + "person owns this car" 
          + ". " + "These are - " + this.getOwnerNames(); 
    };
 };



 function Person(name, surname, age, gender, cars) {
     this.name = name;
     this.surname = surname;
     this.age = age;
     this.gender = gender;
     this.cars = cars || [];

     this.fullName = function() {
        return this.name + " " + this.surname;
     };
     this.countCars = function (){
        return this.cars.length;
     };
     this.buysCar = function(Car){
        this.cars.push(Car);
    }
      this.sellsCar = function(){
        return this.cars.pop(Car); //??
      };
      this.getAllCarsInfo = function(){
        let info = [];
        for (let i = 0; i < this.cars.length; i++) {
            info.push(this.cars[i].getCarInfo());
        }
        return this.name + " " + "owns these cars " + info.join(", ");
    };
    
  };


 

 let duti_picoti = new Car("BMW", "525", "1999");
let stodevianosto = new Car("Mercedes", "E190", 1991);

let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let ilona = new Person("Elon", "Musk", 30, "M");


daniel916.buysCar(duti_picoti); // adds passed car
daniel916.buysCar(stodevianosto); // adds passed car
daniel916.sellsCar(duti_picoti); // removes passed car
ilona.buysCar(stodevianosto); // adds passed car
ilona.buysCar(duti_picoti); // adds passed car


console.log({
    daniel: {
      fullName: daniel916.fullName(),
      countCars: daniel916.countCars(),
      getAllCarsInfo: daniel916.getAllCarsInfo(),
    },
    elon: {
      fullName: ilona.fullName(),
      countCars: ilona.countCars(),
      getAllCarsInfo: ilona.getAllCarsInfo(),
    },
    duti_picoti: {
      getOwnersCount: duti_picoti.getOwnersCount(),
      getOwnerNames: duti_picoti.getOwnerNames(),
      getFullInfo: duti_picoti.getFullInfo(),
      getCarInfo: duti_picoti.getCarInfo(),
    },
    stodevianosto: {
      getOwnersCount: stodevianosto.getOwnersCount(),
      getOwnerNames: stodevianosto.getOwnerNames(),
      getFullInfo: stodevianosto.getFullInfo(),
      getCarInfo: stodevianosto.getCarInfo(),
    },
  });