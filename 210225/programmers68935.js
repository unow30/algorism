/*
## 3진법 뒤집기

### 문제 설명
  > 자연수 n이 매개변수로 주어집니다. 
  n을 3진법 상에서 앞뒤로 뒤집은 후, 
  이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

  ### 제한사항
  >1. n은 1 이상 100,000,000 이하인 자연수입니다.
  
  ### 입출력 예
  | numbers     | result        |
  | ----------- | ------------- |
  | 45 | 7 |
  | 125   | 229  |
*/

//3진법 변환 n.toString(3) 문자열 숫자가 표시됨
//배열 앞뒤 뒤집기 unshift
//10진법 전환 parseInt(n, 3) 3은 n이 3진법임을 표시
function solution(n) {
    var answer = 0;
    let reverse = []
    n = n.toString(3).split('')

    n.map(el => {
        reverse.unshift(el)
    })

    answer = parseInt(reverse.join(''), 3)

    return answer;
}
console.log(solution(125))

//매우 간결한 방법
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
    // let n = "abcde"
    // [...n]
    //(5) ["a", "b", "c", "d", "e"]
}