// 객체 리터럴을 변수에 직접 할당하여 스마트폰을 표현해보세요.
// 2가지 프로퍼티와, 2가지 메서드를 가진 객체여야 합니다.

// let smartphone = {
//   model : "iphone6",
//   company : "apple",

//   calling : function(numb) {
//     console.log(`${numb}에게 전화 거는 중`);
//   },

//   showMyModelId : function() {
//     console.log(`${model}입니다.`);
//   }
// }

// ------------------------------------------------
// ------------------------------------------------
// 함수를 이용해서 User클래스를 만들어 보세요
// 3가지 전달인자를 받는다. 아이디 비밀번호 주소를 받아 프로퍼티에 할당하시오
// 해당 객체의 비밀번호가 맞다면 2번째 전달인자로 받은 값으로 비밀번호 프로퍼티를 변경하는
// 메서드를 만드세요 setMyPassword : (prev,next){}

// function user_check(id, pw, addr) {
//   return {
//     id : id,
//     pw : pw,
//     addr : addr,

//     setMyPassword : function(prev, next) {
//       if(prev === pw) {
//         console.log('비밀번호 변경');
//         pw = next;
//       } else {
//         console.log('비밀번호가 틀렸습니다.');
//       }
//     } 
//   }
// }

// let user = user_check('k3hppk', '1234', 'Daegu');

// console.log(user);
// user.setMyPassword('1234', '5678');
// user.setMyPassword('1234', '5678');


// ------------------------------------------------
// ------------------------------------------------
// 클래스 문법으로 위와 똑같이 해보기

// class User_check {
//   constructor(id, pw, addr) {
//     this.id = id;
//     this.pw = pw;
//     this.addr = addr;
//   }
//   setMyPassword(prev, next) {
//     if(prev === this.pw) {
//       console.log('비밀번호 변경');
//       this.pw = next;
//     } else {
//       console.log('비밀번호가 틀렸습니다.');
//     }
//   }
// }


// user = new User_check('k3hppk', '1234', 'Daegu');
// console.log(user);
// user.setMyPassword('1234', '5678');
// user.setMyPassword('1234', '5678');

// ------------------------------------------------
// ------------------------------------------------
// 캡슐화

function user_check(id, pw, addr) {
  let user_pw = pw;
  
  return {
    id : id,
    addr : addr,

    setMyPassword : function(prev, next) {
      if(prev === user_pw) {
        console.log('비밀번호 변경');
        user_pw = next;
      } else {
        console.log('비밀번호가 틀렸습니다.');
      }
    } 
  }
}

user = user_check('k3hppk', '1234', 'Daegu');
console.log(user);
user.setMyPassword('1234', '5678');
user.setMyPassword('1234', '5678');


class User_check {

  constructor(id, pw, addr) {
    let user_pw = pw;
    this.id = id;
    this.addr = addr;
    this.setMyPassword = function(prev, next) {
      if(prev === user_pw) {
        console.log('비밀번호 변경');
        user_pw = next;
      } else {
        console.log('비밀번호가 틀렸습니다');
      }
    }
  }
}

class_user = new User_check('k3hppk', '1234', 'Daegu');
console.log(class_user);
class_user.setMyPassword('1234', '5678');
class_user.setMyPassword('1234', '5678');


