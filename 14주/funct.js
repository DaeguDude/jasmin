// // 인풋은 있으나 아웃풋은 없는 형태

// let a = 10;
// let b = 20;

// // 함수를 정의할 때의 변수는 parameter
// function sum(numb_1, numb_2) {
//   return numb_1 + numb_2;
// }

// let dummy_1 = sum(10, 20);
// console.log(dummy_1);

// // ------------------------------------
// function minus(numb_1, numb_2) {
//   return numb_1 - numb_2;
// }

// let dummy_2 = minus(10, 20);
// console.log(dummy_2);

// // ------------------------------------
// function multiplication(numb_1, numb_2) {
//   return numb_1 * numb_2;
// }

// let dummy_3 = multiplication(10, 20);
// console.log(dummy_3);



// function addition(numb_1, numb_2, numb_3) {
//   console.log(numb_1 + numb_2 + numb_3);
// }

// function find_biggest(numb_1, numb_2, numb_3) {
//   if(numb_1 >= numb_2 && numb_1 >= numb_3) {
//     console.log(`${numb_1}이 가장 큰 숫자입니다.`);
//   }

//   if(numb_2 >= numb_1 && numb_2 >= numb_3) {
//     console.log(`${numb_2}이 가장 큰 숫자입니다.`);
//   }
  
//   if(numb_3 >= numb_1 && numb_3 >= numb_2) {
//     console.log(`${numb_3}이 가장 큰 숫자입니다.`);
//   }
// }

// find_biggest(30, 20, 10);

// const arr_1 = [];
// function full(array) {
//   for(let i = 0; i <= 100; i++) {
//     array[i] = i;
//   }
// }

// full(arr_1);
// console.log(arr_1);

// // 전달인자로 배열을 받고, 배열을 처음부터 끝까지 출력하는데
// // 짝수면 짝수, 홀수면 홀수라고 출력하는 함수를 만들어보시오
// function odd_or_even(array) {
//   for(let i = 0; i <= array.length-1; i++) {
//     if(array[i] % 2 == 0) {
//       console.log(`${array[i]}는 짝수입니다.`)
//     } else {
//       console.log(`${array[i]}는 홀수입니다.`)
//     }
//   }
// }

// odd_or_even(arr_1);

function random_push() {
  const random = Math.floor(Math.random() * 100);
  const array = [];
  for(let i = 0; i < random; i++) {
    const value = Math.floor(Math.random() * 10);
    array[i] = value;
  }
  return array;
}

const arr_1 = random_push();
const arr_2 = random_push();
// arr1과 arr2에 이 함수를 대입하고 출력해주세요
console.log(arr_1);
console.log(arr_2);

function elements_printer(array) {
  for(i = 0; i <= array.length-1; i++) {
    console.log(array[i]);
  }
}

elements_printer(arr_1);
