/*   3,10
.+   +
.1,10   
.   
.   
.   
.1,4   
.+  +
.   3,4
.
.
...........
하나의 점의 x,y좌표값과 다른 점의 좌표값 중 x나 y가 일치하는 부분이 있다면 
두 좌표는 x 또는 y좌표 직선상에 위치하는 값이다.
좌표값은 1이상 10억 이하의 자연수 
v[n]의 [x,y]값과 v[m]의 [x,y]값을 비교
*/
function solution(v) {
    var answer = []
    let x = {}
    let y = {}
    v.forEach(el => {
        if (x[el[0]]) {
            x[el[0]] += 1
        } else {
            x[el[0]] = 1
        }

        if (y[el[1]]) {
            y[el[1]] += 1
        } else {
            y[el[1]] = 1
        }
    })
    /**
     * X = {'1':1, '10':2}
     * Y = {'3':1, '5':2}
     */

    for (let i in x) {
        if (x[i] == 1) answer.push(Number(i))
    }
    for (let i in y) {
        if (y[i] == 1) answer.push(Number(i))
    }
    console.log('Hello Javascript')
    console.log(answer)
}
solution([[1, 4], [3, 4], [3, 10]])
solution([[1, 1], [2, 2], [1, 2]])
