//11: 42, 12: 44, 13: 111, 14: 112, 15: 114, 16: 121 ...
// 1 나누기 3 = 0 나머지 1
// 2 나누기 3 = 0 나머지 2
// 3 나누기 3 = 1 나머지 0 index?

function solution(n) {
    var answer = '';
    console.log(answer)
    let fourOneTwo = [4, 1, 2]
    if (n == 3) return '4'

    let aux = (n) => {
        if (n == 0) {
            return answer
        }
        answer = fourOneTwo[n % 3] + answer
        aux(Math.floor(n / 3))

    }
    aux(n)
    return answer
}
// 이방법으로 통과가 안된다. n의 길이가 최대 5억개인데, O(n)일 경우 js 알고리즘은 1억 이상 계산이 넘어가면 오답처리를 한다.
// log(n) 방식으로 풀기 위해선 다른 방법을 써야 한다.

//n%3 == 0이 되는 경우, ex)3/3 = 1이 되어 aux를 한 번 더 돌게 된다.
//Math.floor(n/3)-1을 해주어 n값이 0이 되도록 하면 재귀를 멈출 수 있다.
//이렇게 문제는 풀렸는데, 효율성 테스트를 전부 통과하지 못했다.
//n이 5억개일 경우, 반복되는 경우의 수가 많아져서 문제가 된다고 예상한다. 1억개도 많다. 계산을 더 줄여야 한다.

function solution2(n) {// 10
    var answer = ''; // '' '1' '41'
    console.log(answer)
    let fourOneTwo = [4, 1, 2]

    let aux = (n) => { // 3 
        if (n == 0) {
            return
        }
        answer = fourOneTwo[n % 3] + answer //'4' 
        if (Math.floor(n % 3 === 0)) {
            aux(Math.floor(n / 3) - 1)//0
        } else {
            aux(Math.floor(n / 3))
        }
    }
    aux(n)

    return answer
}

//6 '4' '24'