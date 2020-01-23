let a = 20;
let b = 30;
let c = 40;

// a가 b보다 큰 경우에 a는 b보다 큽니다 출력
// 아니라면 b는 a보다 큽니다를 출력해주세요
// b가 a보다 큰 경우에 한하여 c가 b보다 크다면 c는 b보다 큽니다를 출력
// 아니라면 b는 c보다 큽니다를 출력해주세요

// if (a > b) {
//   console.log("a는 b보다 큽니다");
// } else {
//   if(c > b) {
//     console.log("c는 b보다 큽니다");
//   } else {
//     console.log("b는 c보다 큽니다");
//   }
// }

// for문은 ( ) 안에, for 문에서 사용할 수 있는 변수를 선언할 수 있고
// 조건을 적을 수 있으며, 반복이 끝날때마다 실행할 코드를 같이 한 줄에 쓸 수 있다.
// for(let i=0; i<10; i++)


// while문은 소괄호 안에 조건만 명시해줄 수 있다. for처럼 선언도,
// 반복이 끝난 후 실행할 코드도 적지 못하고 그저 조건만 적을 수 있다.

for(let i=50; i>=0; i--) {
  if(i==0) {
    break;
  }
  if(i%2 == 0) {
    console.log(`${i}는 짝수입니다.`);
  } else {
    console.log(`${i}는 홀수입니다.`);
  }
}

let i = 25;
while(i <= 100) {
  if(i%2 == 1) {
    console.log(`${i}는 홀수입니다.`);
  }
  i++;
}
