// 클로저를 이용하여 globalFunc 변수를 localVar 변수에 접근하도록 해보세요
let globalFunc = '';

{
  let localVar = 20;
  globalFunc = localVar;
}

console.log(globalFunc);

















