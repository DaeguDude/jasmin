// 호이스팅이란 함수 안에 선언들을 모두 끌어올려서 해당 함수의 최상단에 선언하는 것을 말합니다.
// ----------------------------------------------------------------------
// dummy();
// function dummy() {
//   console.log('hi');
// }


// 객체 - 현재 배운 숫자, 스트링, 배열 등을 모두 포함하는 데이터타입
// 객체는 각 데이터와 기능을 논리적으로 묶어 놓은 것
// 객체는 메서드라는 기능과 프로퍼티(객체가 가지고 있는 데이터)
// 클래스가 필요함, 그리고 이 클래스로 생성된 것이 객체(오브젝트, 인스턴스)입니다.
// ----------------------------------------------------------------------
// const leejongho = {
//   eye : 2,
//   age : 27,
//   face: "handsome in the world",
//   hair: "풍성",
//   tall: 187,
//   weight: 65,

//   sayMyName : function() {
//     console.log("안녕 나는 이종호야");
//   }
// }

// const sanghak = {
//   height: 180,
//   weight: 83,
//   age: 29,

//   sayMyWeight : function() {
//     console.log(`안녕 나는 ${sanghak.weight}kg 이야.`)
//   },

//   sayMyHeight : function() {
//     console.log(`안녕 나는 ${sanghak.height}cm 이야.`)
//   }
// }

// console.log(sanghak.height);
// console.log(sanghak.weight);
// console.log(sanghak.age);
// sanghak.sayMyHeight();
// sanghak.sayMyWeight();

// function fishBread(so) {
//   return {
//     반죽 : "밀가루",
//     만든사람 : "이종호",
//     언제만듬 : new Date,
//     내용물 : so
//   }
// }

// const first = fishBread("크림");
// const second = fishBread();

// console.log(first);
// console.log(second);

class Tv {
  constructor(display, speaker, who) {
    this.display = display;
    this.speaker = speaker;
    this.whoMade = who;
    this.chanel = 7;
  }

  presentChanel() {
    return this.chanel;
  }

  changeChanel(setChanel) {
    this.chanel = setChanel 
  }

  up() {
    return ++this.chanel;
  }
  down() {
    return --this.channel;
  }
}

// const samsungTv = new Tv("samsung", "하만카돈", "samsung");
// console.log(samsungTv);
// console.log(samsungTv.presentChanel());
// samsungTv.changeChanel(20);
// console.log(samsungTv.presentChanel());

// const lgTv = new Tv("QLED", "뱅앤올롭슨", "LG");
// console.log(lgTv);
// console.log(lgTv.presentChanel());
// lgTv.up();
// lgTv.up();

// console.log(lgTv.presentChanel());


// 스마트폰 클래스 전화번호, 통신사, 제조사
// 전화() 메서드로 스트링을 받고 console.log(`${string}에 전화를 거는 중입니다.)
class SmartPhone {
  constructor(phoneNum, carrier, company) {
    this.phoneNum = phoneNum;
    this.carrier = carrier;
    this.company = company;
  }

  make_call(string) {
    console.log(`${string}에 전화를 거는 중입니다.`)
  }
}

sanghakPhone = new SmartPhone("01049931290", "LGU+", "iphone");
console.log(sanghakPhone.phoneNum);
console.log(sanghakPhone.carrier);
console.log(sanghakPhone.company);
sanghakPhone.make_call("010-5848-3258");