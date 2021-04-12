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