// html  open with live server 구동후 ctrl+shift_i 누르면 콘솔창 보임
'use strict';

// console.log('hello world');
// console.log('hello world2');

// let a;
// a = 6;
// console.log(a);

// function sayThis(something) {
//   console.log(something);
// }

// sayThis('1234');

// function print(person) {
//   console.log(person.name);
//   console.log(person.sex);
// }
// // 오브젝트는 키와 벨류의 집합이다. 파이썬의 딕셔너리처럼
// const kim = { name: 'jongbae', sex: 'male' };
// print(kim);

// 자료구조

const arr1 = new Array();
const arr2 = [1, 2, 3, 4, 5, 6];
console.log(arr2[0]);

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

for (let arr of arr2) {
  console.log(arr);
}

// arr2.forEach(function (value, index) {
//   console.log(index, value);
// });

arr2.forEach((value, index) => console.log(index, value));

arr2.push(10, 11);
console.log(arr2);
arr2.pop();
console.log(arr2);

arr2.unshift(100, 102);
console.log(arr2);
arr2.shift();
console.log(arr2);

console.log(arr2.indexOf(102));
console.log(arr2.includes(102));

//  제일 먼저 발견하는 값의 인뎃스 반환
console.log(arr2.lastIndexOf(4));
