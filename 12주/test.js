// for(조건에 쓰일변수; 반복실행되는 조건; 반복 될때마다 실행될 코드) {
//   반복적으로 실행될 코드
// }

// 100부터 0까지 내려가며 
// 3의 배수입니다 와 숫자를 출력
// 2의 배수라면 2의 배수입니다 와 숫자를 출력
// 아니라면 이도저도 아닙니다

// for(let i = 100; i >= 0; i--) {
//   if(i % 3 == 0) {
//     console.log(`${i}는 3의 배수입니다`);
//   } else if(i % 2 == 0) { 
//     console.log(`${i}는 2의 배수입니다`);
//   } else {
//     console.log(`${i}는 이도저도 아닙니다`);
//   }
// }

// 후위연산자, 전위 연산자
// let a = 0;
// console.log(a++);
// console.log(a);

// let b = 1;
// console.log(++b);
// console.log(b)

// let c = 0;
// console.log(++c);
// c = c + 2;
// console.log(c)

// while문을 이용해서 100부터 0까지 출력하는데, 5의 배수라면 i는 5의 배수입니다를 출력
// let b = 100;
// while(b >= 0) {
//   if(b % 5 == 0) {
//     console.log(`${b}는 5의 배수입니다`);
//   }
//   b--;
// }