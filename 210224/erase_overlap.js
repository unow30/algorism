const arr = [2, 1, 5, 1, 6, 5, 2, 3];

//* 1. Set
// Set을 사용하면 유니크한 Set객체를 반환합니다.
// Set객체를 다시 Array.from으로 배열로 변경합니다.
const set = Array.from(new Set(arr)); // [2, 1, 5, 6, 3]

//* Array.from(arrayLike [, mapFn [, thisArg]])
/* 
  유사배열 또는 반복 가능한 객체에서 shallow-copied된 Array 인스턴스를 만듭니다.
    arrayLike: 배열로 변환 할 배열 유사 또는 반복 가능한 객체입니다.
    mapFn: 배열의 모든 요소에서 호출 할 매핑 함수입니다.
    thisArg: mapFn을 실행할 때 사용할 this 값입니다.
*/

const fromArr1 = Array.from('foo');
// expected output: Array ["f", "o", "o"]

const fromArr2 = Array.from([1, 2, 3], x => x + x);// x=>x+x는 mapFn이다
// expected output: Array [2, 4, 6]

const fromArr3 = Array.from('123', function (item) {
    console.log("THIS", this);//also this.test
    return item * 2;
}, {
    test: "valueOfThis"
});
//console.log("Result:", fromArr3);
// expected output: 
//THIS { test: 'ValueOfThis' }
//THIS { test: 'ValueOfThis' }
//THIS { test: 'ValueOfThis' }
//Result: [ 2, 4, 6 ]

// * es6
const that = { test: "ValueOfThis" };
const fromArr4 = Array.from('123', (item) => {
    console.log("THIS", that);
    return item * 2;
});
//console.log("Result:", fromArr4);

//* 2. reduce
// Array.includes(value) : value가 Array배열에 존재하는지 판단해 true, false를 반환합니다.
arr.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);
//* [2, 1, 5, 6, 3]


// ES6를 사용 못 할 때

// 1. reduce, indexOf
arr.reduce(function (acc, curr, index) {
    acc.indexOf(curr) > -1 ? acc : acc.push(curr);
    return acc;
}, []); // [2, 1, 5, 6, 3]

// 2. filter, indexOf
arr.filter(function (a, i, self) {
    return self.indexOf(a) === i;
}); // [2, 1, 5, 6, 3]