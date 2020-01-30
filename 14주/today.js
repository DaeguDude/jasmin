// let i = 25;
// for(i=25; i<=100; i++) {
//   if(i%2 == 0) {
//     console.log(`${i}는 짝수입니다`)
//   } else {
//     console.log(`${i}는 홀수입니다`)
//   }
// }

// i = 100;
// while(i >= 0) {
//   if(i%2 == 0) {
//     console.log(`${i}는 짝수입니다`)
//   } else {
//     console.log(`${i}는 홀수입니다`)
//   }
//   i = i - 3;
// }

const arr_1 = [];
// const arr_2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(i=0; i<=100; i++) {
  arr_1[i] = i;
}

i = 0;
while(i <= arr_1.length-1) {
  if(arr_1[i] % 2 == 0) {
    console.log(`${arr_1[i]}는 짝수입니다`);
  } else {
    console.log(`${arr_1[i]}는 홀수입니다`);
  }
  i = i + 1;
}

for(i = 0; i <= arr_1.length-1; i+=3) {
  console.log(arr_1[i]);
}

const dummy = arr_1.slice(0, 16);
console.log(dummy);


