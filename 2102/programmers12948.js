/*## 핸드폰 번호 가리기

### 문제 설명
  > 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

  ### 제한사항
  >s는 길이 4 이상, 20이하인 문자열입니다.
  
  ### 입출력 예
  | phone_number     | return        |
  | ----------- | ------------- |
  | "01033334444" | `"*******4444"` |
  | "027778888"   | `"*****8888"`  |
*/

function solution(phone_number) {
    var answer = '';
    phone_number = phone_number.split('')
    for (let i = 0; i < phone_number.length - 4; i++) {
        phone_number[i] = "*"
    }
    console.log(phone_number)
    answer = phone_number.join('')
    return answer;
}

//정규식 사용
function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));

//repeat(), slice 사용, 훨씬 간결하다.
function hide_numbers(s) {
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    //함수를 완성해주세요

    return result;
}
