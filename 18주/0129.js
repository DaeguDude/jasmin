// 스택은 LIFO구조를 띄고 있다.
// 스택의 유틸리티 전통적인 메서드는 3개가 있다.
// 스택에 아이템을 추가하기위한 push
// 스택의 최상단에 아이템을 제거하는 pop
// 스택의 최상단에 있는 아이템을 반환하는 peek

// isEmpty 스택이 비어있는지를 확인합니다. isEmpty 메서드는 pop, peek
// isFull 스펙이 가득차있는지 확인하는 메서드입니다. push

// class StackType {
//   constructor(size) {
//     const stack = [];
//     const maxSize = size;
//     let top = -1;

//     const isEmpty = ()=> {
//       return top === -1;
//     }

//     const isFull = ()=> {
//       return top === maxSize;
//     }

//     this.push = (item) => {
//       if(isFull()){
//         console.log("스택이 가득 찼습니다.");
//       } else {
//         stack[++top] = item;
//         console.log(stack);
//         console.log('아이템이 정상적으로 스택에 추가 되었습니다.');
//       }
//     }

//     this.pop = () => {
//       if(isEmpty()) {
//         console.log('스택이 비었습니다.');
//       } else {
//         console.log('스택에서 정상적으로 제거 되었습니다.');
//         return stack[top--];
//       }
//     }

//     this.peek = () => {
//       if(isEmpty()) {
//         console.log('스택이 비었습니다.');
//       } else {
//         return stack[top--];
//       }
//     }
//   }
// }

// const stack = new StackType(100);
// // stack.push(10);
// // stack.push(20);
// // stack.push(30);
// // stack.push(40);
// // stack.push(50);
// // stack.push(60);
// // console.log(stack.pop());
// // console.log(stack.pop());
// // console.log(stack.pop());
// // stack.push(60);

// let result = "";
// let dummy = "hello world";

// for(let i=0; i<dummy.length; i++) {
//   stack.push(dummy[i]);
// }

// for(let i=dummy.length-1; i>=0; i--) {
//   result += stack.pop(dummy[i]);
// }

// console.log(result);

// 큐는 스택과 다르게 FIFO의 구조를 취하는 자료구조이다.
// first in first out(fifo)

class QueType {
  constructor(size) {
    const maxSize = size;
    const queue = [];
    let front = 0;
    let rear = 0;

    const isEmpty = () => {
      return rear === front;
    }

    const isFull = () => {
      return front === (rear + 1) % maxSize;
    }

    this.enQue = (item) => {
      if(isFull()) {
        console.log('큐가 가득 찼습니다.');
      } else {
        rear = (rear + 1) % maxSize;
        console.log(rear);
        console.log(queue);
        queue[rear] = item;
      }
    }

    this.deQue = () => {
      if(isEmpty()) {
        console.log('큐가 비었습니다.');
      } else {
        front = (front + 1) % maxSize;
        console.log('아이템이 제거 되었습니다.');
        return queue[front];
      }
    }
  }
}

// const queue = new QueType(3);
// queue.enQue(10);
// queue.enQue(20);
// queue.enQue(30);
// queue.enQue(40);
// console.log(queue.deQue());
// console.log(queue.deQue());
// console.log(queue.deQue());
