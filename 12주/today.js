// 2019.12.14 자스민입니다

// a > b라면 a는 b보다 큽니다를 출력해주세요.
// let a = 10
// let b = 10


// if(a > b) {
//   console.log("a는 b보다 큽니다")
// } else if(a == b) {
//   console.log("a는 b와 같습니다")
// } else {
//   console.log("a는 b보다 작습니다")
// }

// a = 20 b = 30 c = 40
// a보다 b가 크고 b보다 c가 클때 c가 제일 큽니다

// let a = 20
// let b = 30
// let c = 40
// if(a < b && b < c) {
//   console.log("c가 제일 큽니다")
// }

// a가 b보다 크거나 b가 c보다 작은 경우, hello world를 출력해주세요
// if(a > b || b < c) {
//   console.log("hello world")
// }

let a = 0;
// a가 20인경우, a는 20입니다, 30, 40, 똑같이 하세요
// 이것도 저것도 아니라면 이것도 저것도 아닙니다
switch(a) {
  case 20:
    console.log("a는 20입니다.");
    break;
  
  case 30:
    console.log("a는 30입니다.");
    break;

  case 40:
    console.log("a는 40입니다.");
    break;

  default:
    console.log("이도저도 아닙니다");
}

let b = 20
let c = 30
// 사망연산자를 써서 b가 c보다 크다면, b는 c보다 크다, 아니라면 b는 c보다 작다
b > c ? console.log("b는 c보다 큽니다") : console.log("b는 c보다 작습니다");

// 삼항연산자를 사용해서 d라는 변수를 b가 c보다 크다면 30 할당, 반대의 경우라면 40을 할당
let d = b > c ? 30 : 40;
