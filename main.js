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

// const arr1 = new Array();
// const arr2 = [1, 2, 3, 4, 5, 6];
// console.log(arr2[0]);

// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i]);
// }

// for (let arr of arr2) {
//   console.log(arr);
// }

// arr2.forEach(function (value, index) {
//   console.log(index, value);
// });

// arr2.forEach((value, index) => console.log(index, value));

// arr2.push(10, 11);
// console.log(arr2);
// arr2.pop();
// console.log(arr2);

// arr2.unshift(100, 102);
// console.log(arr2);
// arr2.shift();
// console.log(arr2);

// console.log(arr2.indexOf(102));
// console.log(arr2.includes(102));

// //  제일 먼저 발견하는 값의 인뎃스 반환
// console.log(arr2.lastIndexOf(4));

// 유용한 배열 API
// 배열을 스트링으로 바꾸는 API
// const fruits = ['apple', 'banana', 'orange'];
// console.log(fruits);
// const result = fruits.join('+'); // 괄호안에 구분자 입력 가능
// console.log(result);

// 스트링을 배열로 변환
// const fruits1 = 'apple, banana, orange';
// const result = fruits1.split(',', 2); // 괄호안에 구분자 입력 가능
// console.log(result);

// 배열의 순서를 거꾸로 만들기
// const array = [1, 2, 3, 4, 5];
// const result = array.reverse();
// console.log(result);
// console.log(array);  // arrary 자체의 순서도 변경되어 있다.

// 주어진 배열에서 첫번째와 두번째 인자 삭제후 나머지만으로 새로운 배열 만들기

const array = [1, 2, 3, 4, 5];
// const result = array.splice(0, 2);
// console.log(result);   //삭제된 두개
// console.log(array);    // 나머지 세개

const result1 = array.slice(2, 5);
console.log(result1); //삭제된 두개
console.log(array);
