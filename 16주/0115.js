// 데이터와 기능을 논리적으로 묶어놓은 것
// 데이터 - 프로퍼티
// 기능 - 메소드

// 클래스 - 붕어빵 틀
// 인스턴스 - 나온 붕어빵

function tv(display,speaker) {
  return {
    name: "상학 TV",
    display: display,
    speaker: speaker
  }
}

let first = tv("lg", "Sony");
let second =  tv("lg", "Sony");

console.log(first);
console.log(second);

console.log(first === second);