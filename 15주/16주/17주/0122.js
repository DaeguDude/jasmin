// 객체 리터럴을 변수에 직접할당 컴퓨터를 객체로 표현
// 3가지 프로퍼티와 2가지 메서드를 만들어보세요
// let a = {
//   manufacture : 'Apple',
//   year : '2019',
//   model : 'imac',

  
//   say_model : function()  {
//     console.log(`${model} 모델입니다.`);
//   },

//   say_year : function() {
//     console.log(`${year} 년식입니다.`);
//   }
// }

// console.log(a);

// 해당객체의 비밀번호가 맞다면 주소를 출력하는 메소드도 만들어보세요.
// function User(id, password, address) {
//   return {
//     id : id,
//     pw : password,
//     addr : address,

//     check_password : function(password) {
//       if(this.pw === password) {
//         console.log('비밀번호가 맞습니다.');
//       }
//     }
//   }
// }

// let kim = User('k3hppk', '1234', 'Daegu');
// kim.check_password('1234');
// console.log(kim);

// class User {
//   constructor(id, password, address) {
//     this.id = id;
//     this.password = password;
//     this.address = address;
//   }

//   showMyAddr(address) {
//     if(this.address === address) {
//       console.log(`입력하신 주소:${address}가 같습니다.`);
//     }
//   }
// }

// let kim = new User('k3hppk', '1234', 'Daegu');
// console.log(kim);
// kim.showMyAddr('Daegu');

// 함수로 만든 User클래스의 password, address프로퍼티를 캡슐화하고,
// 전달인자로 비밀번호를 받아 기존 비밀번호와 일치한다면 2번째 전달인자로 받은
// 값으로 기존의 비밀번호를 변경해주세요.
// function User(id, password, address) {
//   let pw = password;
//   let addr = address;
//   return {
//     id : id,
  
//     check_password : function(user_pw, new_pw) {
//       if(pw === user_pw) {
//         pw = new_pw;
//         console.log(`비밀번호가 ${new_pw} 로 변경되었습니다.`);
//       } else {
//         console.log(`입력하신 비밀번호: ${user_pw}가 틀렸습니다`);
//       }
//     }
//   }
// }

// let kim = User('k3hppk', '1234', 'Daegu');

// console.log(kim);
// kim.check_password('1234', '5678');
// kim.check_password('1234', '5678');

// class Dog {
//   constructor(name) {
//     this.legs = 4;
//     this.eye = 2;
//     this.tail = true;
//     this.foot = 4;
//     this.asshole = 1;
//     this.name = name;
//     this.beak = "wong wong";
//     this.birthYear = new Date().getFullYear();
//   }

//   wow() {
//     console.log(`${this.beak}`);
//   }
// }

// class Dalmasian extends Dog {
//   constructor(name) {
//     super(name);
//     this.skin = "polka dots";

//     super.wow();
    
//   }

//   bow() {
//     console.log(this.beak);
//   };
// }

// class Booldog extends Dog {
//   constructor() {
//     super();
//     this.skin = "no hair";
//   }

//   bow() {
//     console.log(this.beak);
//   };
// }



// const gary = new Dalmasian('Gary');
// console.log(gary);
// gary.wow();
// // const tom = new Booldog();
// // console.log(tom);

// class Mammal {
//   constructor() {
//     this.eyes = 2;
//     this.legs = 2;
//     this.arms = 2;
//   }
// }

// class Cat extends Mammal {
//   constructor(breed) {
//     super();
//     this.whisker = true;
//     this.breed = breed;
//   }
// }


// class Persian extends Cat{
//   constructor(breed) {
//     super(breed);
//     this.hair = 'Long';
//   }
// }

// class Streetcat extends Cat{
//   constructor(breed) {
//     super(breed);
//     this.hair = 'Short';
//   }
// }

// const persian_cat = new Persian('Persian');
// console.log(persian_cat);

// const street= new Persian('Persian');
// console.log()

// 기계 클래스 
class Machine {
  makeEnergyFromFuel(fuel) {
    console.log(`${fuel}로서 엔진을 구동합니다.`);
  }
}

// 나는 기능을 가진 클래스
const flyMixIn = (superClass) =>{
  return class extends superClass {
    constructor() {
      super();
      this.wing = 2;
    }
    fly() {
      console.log("It's fly");
    }
  }
}

// 드라이브 클래스
const driveMixIn = (superClass) =>{
  return class extends superClass {
    constructor() {
      super();
      this.wheel = 4;
    }
    drive() {
      console.log("it's drive");
    }
  }
}

class FlyingCar extends flyMixIn(driveMixIn(Machine)) {
  constructor() {
    super();
    this.design = "super cool";
  }
}

const tesla = new FlyingCar();

console.log(tesla);
tesla.fly();
tesla.drive();
tesla.makeEnergyFromFuel("쓰레기");

