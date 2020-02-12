// 함수는 일급 객체이다.
// function oddOrEven(numb) {
//   if(numb % 2 ===0) {
//     return () => console.log("이 값은 짝수 입니다.");
//   } else {
//     return () => console.log("이 값은 홀수 입니다.");
//   }
// }

// 콜백은 함수를 함수의 전달인자로 사용하는 기법으로 이를 이용하면 제이쿼리나
// 여타 통신 지연 시간 문제를 해결 할 수 있습니다.

// 간단한 정의 : 함수의 전달인자로 사용하는 함수
function print(numb_1, numb_2, compare) {
  if (compare(numb_1, numb_2)) {
    return `${numb_1}가 더 큽니다.`
  } else {
    return `${numb_2}가 더 큽니다.`
  }
}

function compare(numb_1, numb_2) {
  console.log("비교 중입니다.");
  return numb_1 > numb_2
}

function makeCoffee(blending, tamping, flushing) {
  if(blending()) {
    if(tamping()) {
      if(flushing()) {
        console.log("블렌딩, 탬핑, 플러슁 성공");
        console.log("마지막 절차 : 커피를 뜨거운 물에 붙는다.");
        return "커피대령이용"
      } else {
        return "추출 실패"
      }
    } else {
      return "탬핑 실패";
    } 
  } else {
    return "블렌딩 실패";
  }
}

// Blending
function blending() {
  let blender = Math.floor(Math.random() * 10);
  if(blender % 4 === 0) {
    return false;
  } else {
    return true;
  }
}

function tamping() {
  let tampRandom = Math.floor(Math.random() * 10);
  while(tampRandom % 2 === 0) {
    console.log("부수고 다시 하는 중입니다.");
    return false;
  }
  return true;
}

function flushing() {
  let out = Math.floor(Math.random() * 10);
  if(out % 9 === 0) {
    return false;
  } else {
    return true;
  }
}

console.log(makeCoffee(blending, tamping, flushing));

