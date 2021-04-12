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
