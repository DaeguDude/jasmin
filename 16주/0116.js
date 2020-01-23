// // // // 클래스
// // // // 프로퍼티 3개, 메소드 1개


// // // let kimSangHak = {
// // //   name: 'KimSangHak',
// // //   age: 29,
// // //   major: "Statistics",

// // //   // ES5
// // //   say_my_name : function() {
// // //     console.log(`My name is ${this.name}`);
// // //   }
// // // } // 객체리터럴을 변수에 할당

// // // // 만든 변수의 프로퍼티 중 한가지를 출력하고 메서드를 호출해라.
// // // console.log(kimSangHak.name);
// // // kimSangHak.say_my_name();

// // // 함수를 이용해서 스마트폰 클래스를 만들어보세요. 이 때 전달인자로
// // // 모델명, 통신사, 전화번호를 매개변수로 받아 각 프로퍼티에 할당하고, 전달인자로
// // // 받은 전화번호로 받아 `${나의 전화번호} 가 ${받은 번호}에 전화거는 중입니다.`
// // // 라고 출력하는 메서드를 만드세요.

// // function make_phone(model, carrier, phone_num) {
// //   return { // 객체리터럴을 반환함
// //     model: model,
// //     carrier: carrier,
// //     phone_num: phone_num,

// //     make_call : function(target_num) {
// //       console.log(`${phone_num} 가 ${target_num}에 전화거는 중입니다.`);
// //     }
// //   }
// // }

// // let sanghak_phone = make_phone("iphone", "Apple", "010-4993-1290" )

// // console.log(sanghak_phone.model);
// // console.log(sanghak_phone.carrier);
// // console.log(sanghak_phone.phone_num);

// // sanghak_phone.make_call("010-5848-3258");


// class Make_phone {
//   constructor(model, carrier, phone_num) { // 객체리터럴을 반환함
//     this.model = model;
//     this.carrier =  carrier;
//     this.phone_num =  phone_num;
//   }

//   make_call(target_num) {
//     console.log(`${this.phone_num} 가 ${target_num}에 전화거는 중입니다.`);
//   }

//   show_info() {
//     console.log(`모델:${this.model}, 통신사:${this.carrier}, 번호:${this.phone_num}`);
//   }
// }

// let sanghak_phone = new Make_phone("iphone", "LGU+", "01049931290");
// console.log(sanghak_phone);
// sanghak_phone.make_call("01071937072");
// sanghak_phone.show_info();

// class Iphone {
//   constructor(phone_num, model_id, who_made, display, password) {
//     this.phone_num = phone_num;
//     this.model_id = model_id;
//     this.who_made = who_made;
//     this.display = display;
//     this.password = password;
//   }

//   call(target_num) {
//     console.log(`${target_num}에 전화를 겁시다`);
//   }
// }

// Iphone.call("01049931290");

// 캡슐화는 객체내부에 있는 프로퍼티를 숨기고, 접근을 제한하는 방법입니다.

// function User(id, pw, phone_num) {
//   let password = pw;
//   let phone_number = phone_num;
//   let my_friend = [];
//   return {
//     id : id,
//     set_password : function(pre_pw, set_pw) {
//       if(pre_pw === password) {
//         password = set_pw;
//         console.log("비밀번호가 변경되었습니다.");
//       } else {
//         console.log("비밀번호가 다릅니다.");
//       }
//     },
//     login : function(id, pw) {
//       if(id === this.id && pw === password) {
//         console.log("접속하였습니다.");
//       } else {
//         console.log("비밀번호가 틀렸습니다.");
//       }
//     },
//     login_phone : function(user_phone) {
//       if(phone_number === user_phone) {
//         console.log(`현재 비밀번호는 ${password}입니다. 비밀번호를 변경해주세요.`);
//       } else {
//         console.log('입력하신 핸드폰 번호가 틀립니다.');
//       }
//     },
//     set_push_my_friend : function(number) {
//       my_friend.push(number);
//       console.log(my_friend);
//     },
//     get_my_friend_list : function() {
//       return my_friend;
//     }
//   }
// }

// let kim = User("k3hppk", "1234", "01049931290");
// kim.login("k3hppk", "1234");
// kim.login_phone("010499390");
// kim.set_push_my_friend("1234");
// console.log(kim.get_my_friend_list());
// const hacking_root = kim.get_my_friend_list();
// hacking_root[4] = "파국이다";
// console.log(kim.get_my_friend_list());

// 자바스크립트의 객체의 프로퍼티는 모두 퍼블릭 성격을 가진다.
// 이 말인 즉슨 외부에서 프로퍼티를 변경 할 수 있는 것이다.
// 그러나 보여지지 않거나, 함부로 설정할 수 없게끔 해야하는 값들도 존재한다. 
// 이때 해당 값의 스코프를 전역으로 두어 객체에서 직접 접근이 안되게 끔 하는 것이 캡슐화이다.
// get메서드와 set메서드로 해당 변수의 값을 얻거나 변경할 수 있도록 제한 하는 패턴을 모듈패턴이라 한다.

class User {
  constructor(id, pw, my_phone) {
    let password = pw;
    let phone_number = my_phone;
    let lock = 0;
    this.id = id;
    
    this.get_my_phone_number = function(password_1) {
      if(password_1 === password) {
        return phone_number;
      } else {
        return "비밀번호가 다릅니다";
      }
    } // this.get_my_phone_num

    this.login = function(id_1, password_1) {
      if(lock >= 5) {
        console.log("접근이 제한된 아이디입니다.");
      } else {
        if(id_1 === this.id && password === password_1) {
          console.log("접속하였습니다.");
          lock = 0;
        } else {
          console.log("비밀번호 혹은 아이디가 다릅니다.");
          lock += 1;
        }
      } // this.login
    } // if(lock >= 5)
  }
} // class User

const kimsanghak = new User("k3hppk", "1234", "01049931290");
kimsanghak.login("k3hppk", "123");
kimsanghak.login("k3hppk", "123");
kimsanghak.login("k3hppk", "123");
kimsanghak.login("k3hppk", "123");
kimsanghak.login("k3hppk", "123");
kimsanghak.login("k3hppk", "123");
kimsanghak.login("k3hppk", "123");
kimsanghak.login("k3hppk", "1234");