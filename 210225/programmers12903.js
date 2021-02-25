/*
## 문제 제목

### 문제 설명
  > 1.정수 배열 numbers가 주어집니다. 
    2. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를
     배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요. 

  ### 제한사항
  >1.numbers의 길이는 2 이상 100 이하입니다.
   2.numbers의 모든 수는 0 이상 100 이하입니다.
   3.
  
  ### 입출력 예
  | s           |        result |
  | ----------- | ------------- |
  | 'abcde' | 'c' |
  | 'abcd'   | 'bc'  |
*/

function solution(s) {
    var answer = '';
    let half = parseInt(s.length / 2)
    if (s.length === 1) {
        return s
    }

    if (s.length % 2 === 1) {
        return answer + s[half]
    }
    return answer + s.slice(half - 1, half + 1)
}//'abcde'.slice(0,1) = 'a', slice(1,3) = 'bc' slice(2,4) = 'cd'