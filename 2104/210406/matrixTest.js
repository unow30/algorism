let count = 1;
let matrix = Array.from(Array(5), (_, idx) => Array.from(Array(5), (_) => count++))
/**
 console.log(matrix)
[
  [ 1, 2, 3, 4, 5 ],
  [ 6, 7, 8, 9, 10 ],
  [ 11, 12, 13, 14, 15 ],
  [ 16, 17, 18, 19, 20 ],
  [ 21, 22, 23, 24, 25 ]
]
 */

/*
matrix의 1열만 출력하기
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][0])
}
*/

/*
3행 3열의 인덱스 번호?
console.log(matrix[2].indexOf(matrix[2][2]))
*/

/*
matrix의 1열과 3행의 값을 0으로 만들기
for (let i = 0; i < matrix.length; i++) {
    matrix[i][1] = 0
    for (let j = 0; j < matrix.length; j++) {
        if (i == 2) matrix[i][j] = 0
    }
}
console.log(matrix)
*/

/*
(0,0)부터 (2,2)까지의 범위의 값을 10씩 증가시키기
let row = [0, 2]
let col = [0, 2]
let line = 3
console.log(matrix)
for (let i = row[0]; i <= row[1]; i++) {
    for (let j = col[0]; j <= col[1]; j++) {
        matrix[i][j] += 10
    }
}
console.log(matrix)
*/

/*
(2,2)부터 (4,3)까지의 범위의 값을 시계방향으로 1씩 회전시키기
18 13  13 14  13   13
23 14  18 19
14 19  23 24
*/
let row = [2, 4]
let col = [2, 3]
let tmp = matrix[row[0]][col[0]]
for (let i = row[0]; i <= row[1]; i++) {
    matrix[i][col[0]] = matrix[i + 1][col[0]]
}
// console.log(matrix)

console.log(matrix)
