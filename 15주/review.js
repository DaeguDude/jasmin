// 콜바이 밸류
// 콜바이 레프런스
// let a = 20;
// function change(dummy) {
//   dummy = 10;
// }

// let dummy = [];

// function push(array) {
//   array[0] = 10;
// }

// push(dummy);
// console.log(dummy);

// call by value vs call by reference
// 차이점: 메모리 영역 참조 유무

// 익명함수: 이름이 없는 하암수 하암수 표혀어언식
// let print = function(array) {
//   for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }


// 변수랑 충돌하지 않게 초기화 함수에서 자주 쓰임
// (function(dummy) {
//   console.log(dummy);
// })("hello");

// call by value 작동 데이터 타입
// bool, null, undefined, string, number
// let a;
// // 두 개의 파라미터를 가진 sum 함수를 통해 값을 변경하세요
// function sum(num_1, num_2) {
//   return num_1 + num_2;
// } 

// a = sum(5, 10);
// console.log(a);

// 지역변수는 함수 내부에서 선언된 변수를 일컫는다.
// 전역변수는 함수 바깥에서 선언된 변수를 일컫는다. 

// const array = [10, 20, 30, 40];
// function arrTen(arr) {
//   for (i=0; i < arr.length; i++) {
//     arr[i] += 10;
//   }
// }

// console.log(array);
// arrTen(array);
// console.log(array);

let a = "홀수입니다.";
// 파라미터로 숫자를 받아 이 숫자가 짝수라면 전역변수의 a의 값을
// "짝수입니다."라고 할당하는 즉시 실행 함수를 만드세요.
(function(num) {
  if (num % 2 == 0) {
    a = "짝수입니다";
  }
})(2);


console.log(a);