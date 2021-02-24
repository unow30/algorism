/**
두 개 뽑아서 더하기
  - 문제 설명
  > 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

  - 제한사항
  >numbers의 길이는 2 이상 100 이하입니다.
   numbers의 모든 수는 0 이상 100 이하입니다.
  - 입출력 예
  >|numbers    |result|
   |[2,1,3,4,1]|	[2,3,4,5,6,7]|
   |[5,0,2,7]	|[2,5,7,9,12]|
 */

function solution(numbers) {
    var answer = [];
    /*
      numbers가 [1,1,3,4]이고 모든 숫자끼리 값을 더한다면
      1+(1,3,4) = 2,4,5
      1+(3,4) = 4,5
      3+4 = 7
      2,4,4,5,5,7이 된다.
      모든 요소가 중복이 없는 상태에서 더한 다음, => 이러면 중복된 숫자끼리의 합을 얻을 수 없다.
      answer 안에 중복값이 있는지를 검사하여 push하고, sort하여 return한다. 
      => 그냥 sort는 문자열 기준으로 정렬을 실행한다. 숫자의 대소관계를 비교하여 정렬해야 한다.
         sort((a,b)=> a-b) 오름차순, sort((a,b)=> b-a) 내림차순
    */

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let sum = numbers[i] + numbers[j]
            if (!answer.includes(sum)) {
                answer.push(sum)
            }
        }
    }
    answer = answer.sort((a, b) => a - b)
    // console.log(answer)

    return answer;
}

console.log(solution([2, 1, 3, 4, 1]))
console.log(solution([5, 0, 2, 7]))
console.log(solution([36, 1, 1, 55, 47, 24, 57, 42, 42, 85, , 85, 2, 2, 5559, 0, 1, 3]))