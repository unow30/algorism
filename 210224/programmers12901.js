/*
## 2016년

### 문제 설명
  >2016년 1월 1일은 금요일입니다. 
  2016년 a월 b일은 무슨 요일일까요? 
  두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
  요일의 이름은 일요일부터 토요일까지 각각 `SUN,MON,TUE,WED,THU,FRI,SAT`입니다. 
  예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

  ### 제한사항
  >1.2016년은 윤년입니다.
   2.2016년 a월 b일은 실제로 있는 날입니다. 
    (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
  
  ### 입출력 예
  | a      | b      | result |
  | ------ | ------ | ------ |
  | 5      |   24   | "TUE"  |
*/

//date객체를 이용하면 간단하게 풀 수 있다.
function solution(a, b) {
    var arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var date = new Date(`2016-${a}-${b}`);
    var answer = arr[date.getDay()];
    return answer;
}

//date 없이 직접 계산하기
function solution(a, b) {//a4, b3이라면
    var answer = "";
    var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var week = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];//1/1이 friday이므로 fri부터 시작

    var days = 0;

    for (var i = 0; i < a - 1; i++) {
        days = days + month[i];//31+29+31 = 91 4월 이전인 1,2,3월 일자 계산
    }
    days = days + b - 1;//91+3-1 93일, -1은 뭐지? 윤년 366일이라 -1하는건가?
    answer = week[days % 7];//나눈 나머지
    return answer;
}
