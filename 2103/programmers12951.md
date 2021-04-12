
## JadenCase 문자열 만들기

### 문제 설명
  > JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 
  문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

  ### 제한사항
  >1. s는 길이 1 이상인 문자열입니다.
2. s는 알파벳과 공백문자(" ")로 이루어져 있습니다.
3. 첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 씁니다. ( 첫번째 입출력 예 참고 )
  
  ### 입출력 예
  | s                       | return                  |
  | ----------------------- | ----------------------- |
  | "3people unFollowed me" | "3people Unfollowed Me" |
  | "for the last week"     | "For The Last Week"     |

```js
function solution(s) {
    var answer = '';
    return answer;
}
```
```js
//공백이 2개 이상일 수도 있다.
//맨 앞 뒤 공백도 고려해야 한다.
function solution(s) {
    s = s.toLowerCase().split(" ")

    let res = s.map(el => {
        return el[0].toUpperCase() + el.slice(1)
    }).join("_")
    console.log(res)
}
solution("3people unFollowed me")
solution("for the last week")

//테스트케이스는 통과하는데 전체 과제 제출 시 많은 부분에서 통과하질 못 했다.
//- 앞 뒤 공백이 있는 문자열에서 공백을 유지해야 했다. ex) " abc d ee "=> " Abc D Ee "
//- 공백이 연속되는 경우도 유지했어야 했다.
// 위 두 가지 경우에 공백을 없에주거나 하나만 남도록 만들어야 하는 줄 알았다.
// 테스트케이스나 설명이 부족했다. 정상적인 문장을 만들어야 한다고 생각했다.

function solution2(s) {
    s = s.toLowerCase().split(" ")
    //console.log(s)
    let res = s.map(el => {
        if (el !== "") {
            return el[0].toUpperCase() + el.slice(1)
        } else {
            return el
        }

    }).join("_")
    console.log(res)
    return res
}
solution2("3people unFollowed me")
solution2("for the last week")
solution2(" contain front end space ")
solution2("double  space")
```
