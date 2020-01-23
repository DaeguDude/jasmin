
// for(let i = 0; i < 100; i++) {
//   console.log(array[i]);
// }


// for(let i = 99; i >= 0; i--) {
//   console.log(array[i]);
// }

// console.log(array.length);

// for(let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// for(let i = array.length-1; i >= 0; i--) {
//   console.log(array[i]);
// }

// // 0 부터 99까지
// const random = Math.floor(Math.random() * 100);
// const array = [];

// // 0부터 랜덤한 숫자를 array에 넣는 반복문
// for(let i=0; i < random; i++) {
//   array[i] = Math.floor(Math.random() * 10);
// }


// for(let i=0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     console.log(`${i}방에 ${array[i]}는 짝수입니다.`);
//   }
// }

// for(let i=0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     console.log(`${i}방에 ${array[i]}는 짝수입니다.`);
//     if(array[i] == 0) break;
//   } else {
//     console.log(`${i}방에 ${array[i]}는 홀수입니다.`);
//   }
// }


// for(let i = array.length -1; i>=0; i--) {
//   console.log(array[i]);
// }


const array = [1, 2, 3, 4, 5, 6, 7];
array.push("it's done! FINALLY");

console.log(array);
array.pop();
console.log(array);

console.log(array.slice(0,2));






