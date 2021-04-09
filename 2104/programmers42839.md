
## 소수 찾기

### 문제 설명
  > 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
>
각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

  ### 제한사항
  >1. numbers는 길이 1 이상 7 이하인 문자열입니다.
2. numbers는 0~9까지 숫자만으로 이루어져 있습니다.
3. "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
  
  ### 입출력 예
  | numbers | result |
  | ------- | ------ |
  | "17"    | 3      |
  | "011"   | 2      |

 - 순열 찾기 함수로 numbers로 조합할 수 있는 모든 경우의 수를 구해야 한다.
  - 중복되는 값을 제거한 객체 형식으로 조합수를 저장한다.
  - Object.keys(obj)로 obj의 요소값으로 이뤄진 배열을 생성한다.
  - 배열의 요소 하나당 소수판별 for문을 돌려 소수일 경우 count한다.
  

```js
function solution(numbers) {
    var answer = 0;
    return answer;
}
```

#### 안보고 다시 풀어본 결과
```js
function solution(numbers) {
    let obj = {}
    let cnt = 0

    let aux = (str, numbers, picked) => {
        //base case
        if (str.length == picked) {
            picked += 1

            if (obj[Number(str)]) { // Number("011") -> 11
                obj[Number(str)] += 1
            } else {
                obj[Number(str)] = 1
            }
        }

        //recursive
        for (let i = 0; i < numbers.length; i++) {
            aux(str + numbers[i], numbers.replace(numbers[i], ""), picked)
        }
    }

    aux("", numbers, 1)

    Object.keys(obj).forEach(el => {
        el = Number(el) // "11"-> 11

        if (el > 1) {
            for (let i = 2; i < el; i++) {
                if (el % i == 0) return //소수가 아닐 경우
            }
            console.log(el)
            cnt++ //소수일 경우
        }

    })
    return cnt
}
```