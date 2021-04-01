/*
  "17"-> [1,7] 소수 = [7, 17, 71]
  "011"->[0,1,1] 소수 = [1, 11]
  numbers는 최대 길이 7이다.
  [0,1,2,3,4,5,6] 
  중복숫자가 없다면 소수도 자리수간 값이 중복되지 않는다. [i]는 한번씩 쓴다.
  시간복잡도는 7p1 + 7p2+7p3 ... 7p7
  [1,2,3,4]
  4 12 24 24

  순열 구하기 함수로 중복제외 모든 값을 obj에 담고, 속성값을 배열로 변환했다.
  배열 요소마다 for문을 돌려서 소수여부를 판별했다.
  이건 시간복잡도가 어떻게 되는지 궁금하다.

 - 순열 찾기 함수로 numbers로 조합할 수 있는 모든 경우의 수를 구해야 한다.
  - 중복되는 값을 제거한 객체 형식으로 조합수를 저장한다.
  - Object.keys(obj)로 obj의 요소값으로 이뤄진 배열을 생성한다.
  - 배열의 요소 하나당 소수판별 for문을 돌려 소수일 경우 count한다.

*/
function solution(numbers) {

    let cnt = 0
    let obj = {}

    let aux = (str, numbers, pickNum) => {
        if (str.length == pickNum) {
            pickNum += 1
            if (obj[Number(str)]) {
                obj[Number(str)] += 1
            } else {
                obj[Number(str)] = 1
            }
        }

        for (let i = 0; i < numbers.length; i++) {
            aux(str + numbers[i], numbers.replace(numbers[i], ""), pickNum)
        }
    }
    aux("", numbers, 1)

    //console.log(Object.keys(obj))
    Object.keys(obj).forEach(el => {
        el = Number(el)

        if (el > 1) {
            for (let i = 2; i < el; i++) { //el = 7
                if (el % i == 0) return //7/2 7/3 7/4 7/5 7/6
            }
            cnt++
        }
    })
    console.log(cnt)
}
solution("17")//3
solution("011")//3
solution("7296301")//1546