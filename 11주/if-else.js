let a = 20;
let b = 20;
let c = 30;

if(a < b) {
  console.log("a는 b보다 작습니다.")
} else if(a == b) {
  console.log("a와 b는 같습니다.")
} else {
  console.log("a는 b보다 큽니다.");
}

// 논리연산자(logical operator) - &&(and), ||(or), !(not)
if(a<b && a<c) {
  console.log('a는 모든 변수보다 작습니다.');
}

if(a<b || a<c) {
  console.log('a는 b나 c보다 작습니다.');
}

if(a != 30) {
  console.log('a는 30이 아닙니다.');
}

if(a !== '30') {
  console.log('a는 문자열 30이 아닙니다.');
}