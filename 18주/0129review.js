// 함수를 이용해서 스마트폰 클래스를 만들어보세요.
// 전달인자로 전화번호를 받고 전화를 거는 call 메서드를 추가하세요.
// 생성자 인수로는 모델명 하나만 받아서 프로퍼티에 할당하시오.
// function Smartphone(model) {
//   return {
//     model : model,

//     make_call(number) {
//     console.log(`${number}에 전화를 거는 중입니다.`);
//     }
//   }
// }

// my_phone = Smartphone('iphone');
// console.log(my_phone);
// my_phone.make_call('01049931290');

// class Smartphone {
//   constructor(model, phoneNum) {
//     let userModel = model;
//     let userPhoneNum = phoneNum;

//     this.showMyModel = ()=> {
//       console.log(`모델은 ${userModel} 입니다.`)
//     }
//   }
// }

// sanghak_phone = new Smartphone('iPhone', '01049931290');
// console.log(sanghak_phone);
// sanghak_phone.showMyModel();

// 상속을 이용하여 포유류 -> 고양이 -> 러시안블루 이렇게 표현해보세요
// 포유류 새끼를 낳는 메서드
// 고양이 야옹 메써드
// 러시안블루 프로퍼티 fur 

class Mammal {
  giveBirth() {
    console.log('새끼를 낳습니다');
  }
}

class Cat extends Mammal {
  meow() {  
    console.log('야옹');
  }
}

class RussianBlue extends Cat {
  constructor(fur) {
    super();
    this.fur = fur;
  }
}

console.log(Mammal);
console.log(Cat);

russian_cat = new RussianBlue('short');
console.log(russian_cat);
russian_cat.giveBirth();
russian_cat.meow();
