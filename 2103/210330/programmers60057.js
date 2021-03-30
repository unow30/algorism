// aabbaccc의 문자열을 일정한 간격으로 나누어 동일한 반복이 일어나는 문자열을 압축하여 표시하기
// s는 최대 1000이하의 알파벳 소문자이다. length/2만 확인하면 되므로 최대 500^2 25000번의 반복을 할 수 있다.
// 전체길이의 절반 이상이 다른 문자열로 구성되있으면 압축할 수 없다.
// ex) abcdefgh 8글자중 앞의 4글자abcd와 뒤의 4글자 efgh는 연속되는 값이 아니라 압축할 수 없다. 이 글자수 다음의 글자수부터는 연속되는 값이 나올 수 없다.
// 이전글자, 다음글자를 저장, n번 압축된 글자 배열저장, n개의 글자로 압축한 문자열의 길이를 저장할 배열->최소길이의 값 리턴

function solution(s) {
    if (s.length === 1) console.log(1) //return 1
    let prevValue = ""
    let cnt = 0
    let result = []

    for (let i = 1; i <= s.length / 2; i++) {//ababcdcdababcdcd
        let compArray = []
        prevValue = s.substring(0, i)//a / ab / aba / ababcdcd
        cnt = 1
        compArray[0] = prevValue

        for (let j = i, c = 0; j < s.length; j += i) {
            let nowValue = s.substring(j, j + i)// b a b c d c... / ab cd cd ..../ bcd cda bab cdc d / ... ababcdcd 
            if (nowValue === prevValue) {
                compArray[c] = ++cnt + nowValue
            } else {
                cnt = 1;
                compArray[++c] = nowValue
            }
            prevValue = nowValue
        }
        result[i - 1] = compArray.reduce((acc, cur) => (acc += cur.length), 0)
    }
    console.log(result.sort((a, b) => a - b)[0])
    //result.sort((a, b) => a - b)[0]
}
solution('b') //1
solution('aabbaccc') //7
solution('abcabcabcabcdededededede') //14
solution('xababcdcdababcdcd') //17