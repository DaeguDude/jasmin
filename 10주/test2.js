console.log(0x000ff); // 16진수
console.log(0o0022); // 8진수
console.log(21.5); // 십진수
console.log(3.04e4); //지수계산
console.log(Infinity); //무한대
console.log(-1.6e7); // 음수 지수 계산
console.log(-Infinity); // 음의 무한대
console.log(NaN); // 숫자가 아님(Not a Number)

console.log(Math.pow(3, 2)); // power
console.log(Math.round(10.6)); // round
console.log(Math.ceil(10.2)); // ceiling
console.log(Math.floor(10.6)); // floor
console.log(Math.sqrt(9)); // sqrt
console.log(Math.random()); // 0부터 1.0까지 랜덤 넘버 제네레이트

// ""
// ''
// ``

let hello_my_dear = "hello my man";
let response = 'hello my girl'
console.log(hello_my_dear);
console.log(response);
console.log("큰 따옴표안에는 \"큰따옴표\" 가 들어가면 안됌");
console.log('작은 따옴표안에는 \'작은따옴표\' 가 들어가면 안됌');

let my_name = "sanghak";
let family_name = "kim";
// console.log(my_name + family_name);

let my_full_name = "hello " + family_name + my_name;
console.log(my_full_name);

const where = "article";
const who = "admin";
const get_num = "6";

// const url = "http://www.naver.com/" + where + "/" + who + "&"
const url = `http://www.naver.com/where=${where}&who=${who}&get_num=${get_num}`;
console.log(url)

// boolean
console.log(10 > 20);
console.log(10 < 20);