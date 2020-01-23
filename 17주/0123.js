// class Mammal {
//   giveabirth() {
//     console.log("자식을 낳습니다");
//   }
// }

// class Dog extends Mammal{
//   // constructor는 프로퍼티를 만들기 위해서 필요함
//   constructor(name) {
//     super();
//     this.name = name;
//     this.legs = 4;
//     this.eyes = 2;
//     this.tale = true;
//     this.wong = '멍멍';
//   }

//   bite() {
//     console.log(`${this.wong}`);
//   }
// }

// class BoolDog extends Dog {
//   constructor(name) {
//     super(name);
//     this.skin = '미끈';
//   }
// }

// class Dalmasian extends Dog {
//   constructor(name) {
//     super(name);
//     this.skin = "점박이";
//   }
// }

// const gary = new BoolDog("게리");
// const tom = new Dalmasian("톰");
// console.log(gary);
// console.log(tom);
// gary.bite();
// gary.giveabirth();

// ------------------------------------------------
// ------------------------------------------------
// class Machine {
//   constructor(model, year, manufacture) {
//     this.model = model;
//     this.year = year;
//     this.manufacture = manufacture;
//   }
//   make_energy() {
//     console.log("에너지를 만듭니다");
//   }
// }

// class Car extends Machine {
//   constructor(model, year, manufacture) {
//     super(model, year, manufacture);
//     this.engine = "Good enough engine";
//     this.wheel = 4
//   }

//   start_driving() {
//     console.log("달리기 시작합니다.");
//   }
// }

// class Airplane extends Machine {
//   constructor(model, year, manufacture) {
//     super(model, year, manufacture);
//     this.engine = "Strong Engine";
//     this.wing = 2
//   }

//   start_flying() {
//     console.log("날기 시작합니다.");
//   }
// }

// my_car = new Car('Avante', '2020', 'Hyundai');
// console.log(my_car);
// my_car.start_driving();

// my_airplane = new Airplane('boeing737', '2020', 'boeing');
// console.log(my_airplane);
// my_airplane.start_flying();


// ------------------------------------------------
// ------------------------------------------------
// const flyMixin = (superClass) => {
//   return class extends superClass {
//     fly() {
//       console.log("날고 있습니다.");
//     }
//   }
// }

// const driveMixin = (superClass) => {
//   return class extends superClass {
//     drive() {
//       console.log("달리고 있습니다.");
//     }
//   }
// }

// class Machine {
//   makeEnergyFromFuel() {
//     console.log(`${this.fuel}로부터 에너지를 만드는 중입니다.`);
//   }
// }

// class FlyCar extends flyMixin(driveMixin(Machine)){
//   constructor(fuel) {
//     super();
//     this.fuel = fuel;
//   }
//   driveFly() {
//     console.log("달리면서 날려고 하는 중 입니다.");
//   }
// }

// const tom = new FlyCar("수소");
// console.log(tom);
// tom.fly();
// tom.drive();
// tom.makeEnergyFromFuel();


// ------------------------------------------------
// ------------------------------------------------