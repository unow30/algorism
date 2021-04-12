
## 문자열 압축

### 문제 설명
  > 데이터 처리 전문가가 되고 싶은 "어피치"는 문자열을 압축하는 방법에 대해 공부를 하고 있습니다. 최근에 대량의 데이터 처리를 위한 간단한 비손실 압축 방법에 대해 공부를 하고 있는데, 문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현하여 더 짧은 문자열로 줄여서 표현하는 알고리즘을 공부하고 있습니다.
  >
간단한 예로 "aabbaccc"의 경우 "2a2ba3c"(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)와 같이 표현할 수 있는데, 이러한 방식은 반복되는 문자가 적은 경우 압축률이 낮다는 단점이 있습니다. 예를 들면, "abcabcdede"와 같은 문자열은 전혀 압축되지 않습니다. "어피치"는 이러한 단점을 해결하기 위해 문자열을 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.
>
예를 들어, "ababcdcdababcdcd"의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 잘라서 압축한다면 "2ab2cd2ab2cd"로 표현할 수 있습니다. 다른 방법으로 8개 단위로 잘라서 압축한다면 "2ababcdcd"로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.
>
다른 예로, "abcabcdede"와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 "abcabc2de"가 되지만, 3개 단위로 자른다면 "2abcdede"가 되어 3개 단위가 가장 짧은 압축 방법이 됩니다. 이때 3개 단위로 자르고 마지막에 남는 문자열은 그대로 붙여주면 됩니다.
>
압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.

  ### 제한사항
  >1. s의 길이는 1 이상 1,000 이하입니다.
2. s는 알파벳 소문자로만 이루어져 있습니다.
  
  ### 입출력 예
  | numbers                    | result |
  | -------------------------- | ------ |
  | "aabbaccc"                 | 7      |
  | "ababcdcdababcdcd"         | 9      |
  | "abcabcdede"               | 8      |
  | "abcabcabcabcdededededede" | 14     |
  | "xababcdcdababcdcd"        | 17     |

```js
function solution(numbers) {
    var answer = [];
    
}
```
```js
// aabbaccc의 문자열을 일정한 간격으로 나누어 동일한 반복이 일어나는 문자열을 압축하여 표시하기
// s는 최대 1000이하의 알파벳 소문자이다. length/2만 확인하면 되므로 최대 500^2 25000번의 반복을 할 수 있다.
// 전체길이의 절반 이상이 다른 문자열로 구성되있으면 압축할 수 없다.
// ex) abcdefgh 8글자중 앞의 4글자abcd와 뒤의 4글자 efgh는 연속되는 값이 아니라 압축할 수 없다. 이 글자수 다음의 글자수부터는 연속되는 값이 나올 수 없다.
// 이전글자, 다음글자를 저장, n번 압축된 글자 배열저장, n개의 글자로 압축한 문자열의 길이를 저장할 배열->최소길이의 값 리턴

// function solution(s) {
//     if (s.length === 1) console.log(1) //return 1
//     let prevValue = ""
//     let cnt = 0
//     let result = []

//     for (let i = 1; i <= s.length / 2; i++) {//ababcdcdababcdcd
//         let compArray = []
//         prevValue = s.substring(0, i)//a / ab / aba / ababcdcd
//         cnt = 1
//         compArray[0] = prevValue

//         for (let j = i, c = 0; j < s.length; j += i) {
//             let nowValue = s.substring(j, j + i)// b a b c d c... / ab cd cd ..../ bcd cda bab cdc d / ... ababcdcd 
//             if (nowValue === prevValue) {
//                 compArray[c] = ++cnt + nowValue
//             } else {
//                 cnt = 1;
//                 compArray[++c] = nowValue
//             }
//             prevValue = nowValue
//         }
//         result[i - 1] = compArray.reduce((acc, cur) => (acc += cur.length), 0)
//     }
//     console.log(result.sort((a, b) => a - b)[0])
//     //result.sort((a, b) => a - b)[0]
// }
// solution('b') //1
// solution('aabbaccc') //7
// solution('abcabcabcabcdededededede') //14
// solution('xababcdcdababcdcd') //17

function sol(str) {
    //str의 절반까지 검색해서 중복이 안되면 중복값은 없다.
    //str을 1개 2개 3개씩 자르면서 이전값과 다음값과 비교, 값이 같다면 cnt++
    //n번압축된 문자열의 결과물을 담을 배열이 필요하다.
    if (str.length === 1) console.log(1)
    let cnt = 0
    let result = []

    for (let i = 1; i <= (str.length / 2); i++) { //str의 인덱스를 1번 2번 3번씩 이동할 수 있어야 한다.abcdefg
        let zipStr = []
        let prev = str.substring(0, i)//a
        zipStr[0] = prev
        cnt = 1
        for (let j = i, c = 0; j < str.length; j += i) {
            let next = str.substring(j, i + j)//b
            if (prev === next) {
                zipStr[c] = ++cnt + prev
            } else {
                cnt = 1
                zipStr[++c] = next
            }
            prev = next
        }
        //console.log(zipStr)
        result.push(zipStr.reduce((acc, cur) => acc + cur, ''))
    }
    console.log(result)

    console.log(result.map(el => el.length).sort((a, b) => a - b)[0])

}
//sol('a')//1
//sol('abcdefg')
//sol('ababab')//3
sol('aabbaccc') //7
//sol('abcabcabcabcdededededede')
```
