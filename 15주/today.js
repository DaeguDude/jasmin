// 2020.01.08
// 스코프, scope
// 현재 위치에 있는 함수나, 객체, 배열 내부에서 어떤 변수들에 접근 할 수 있는지 말함.
// 정적스코프, 동적스코프, 전역스코프, 지역스코프

// 전역 스코프
// let a = 10;
// function change() {
//   a = 20;
// }

// let name = "김상학";
// let age = 29;


// function hello(name) {
//   console.log(name);
// }

// function getBirthYear(age) {
//   console.log(new Date().getFullYear() - age);
// }

// hello(name);
// getBirthYear(age);

// 지역 스코프
// 특정 부분에서만 참조가 가능
// 지역 - 함수스코프
// let string = "hi";
// var dummy = "cool";

// function helloworld() {
//   let string = "hello world";
//   var dummy = "boo";
//   console.log(string);
// }
// helloworld();
// console.log(string);
// console.log(dummy);

// 지역 -  블럭 스코프 let과 const
// let string = "hello";
// const dummy = "cool";

// {
//   let string = "hi";
//   const dummy = "hello";
//   console.log(string);
//   console.log(dummy);
// }

// console.log(string);
// console.log(dummy);

// 전역 스코프는 함수, 블럭 외부에서 선언된 변수로 참조 가능한 변수를 말한다.
// 지역 스코프는 함수스코프, 블럭스코프가 있다
// 함수스코프는 함수 내부에서 선언된 변수로 함수 내부에서만 참조 가능하다.
// 블럭스코프는 블럭 내부에서 선언된 변수로 블럭 내부에서만 참조 가능하다.

// 스코프 중첩
// function first() {
//   let a = 10; // 변수 숨김
//   function second() {
//     function third() {
//       let a = 20; 
//       function fourth() {
//         console.log(a);
//       }
//       fourth();
//     }
//     third();
//   }
//   second();
// }

// let user;
// (function(userNum) {
//   let secret = ["이종호", "김태현", "김지은", "김상학"];
//   user = secret[userNum];
// })(2);

// 크을 로오 져어! 클로져 closure clóßürë
// function a() {
//   console.log("hi");
// }

// let b = {
//   hello : function() {
//     console.log("it obj");
//   }
// };

// let c = {
//   function() {
//     console.log("hi there");
//   }
// };

// let callback = function(func) {
//   func();
// }

// callback(a);
// (function(){
//   console.log("no name");
// })();

// 클로져는 함수가 특성 스코프에 접근할 수 있도록 의도적으로 어느 스코프에서 정의하여,
// 스코프를 함수 주변으로 좁이는 것

// let globalFunc;

// {
//   let 막힘 = 20;
//   globalFunc = function(){
//     console.log(막힘);
//   }
// }

// let globalFunc;
// let idontknowPassword;

// {
//   let password = "예은씨 일어나요";
//   let phoneNumber = "01049931290";

  

//   globalFunc = function(user_pwd, set_password) {
//     if(user_pwd === password) {
//       password = set_password;
//       console.log(password);
//     } else {
//     }
//   } 

//   idontknowPassword = function(phone, set_password) {
//     if(phoneNumber === phone) {
//       password = set_password;
//       console.log(password);
//     }
//   }
// }

{
  let local_var = 5;
  a = function() {
    console.log("what");
  }
}

console.log(a);
console.log(local_var);
