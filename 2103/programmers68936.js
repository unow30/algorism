function solution(arr) {

    //2차원 배열의 행과 열의 시작점, 끝점을 찾는다.
    //2차원 배열을 사분하기 위한 행과 열의 중간점을 찾는다.
    //행과 열의 중간점을 기준으로 사분면의 행과 열의 시작점을 찾는다.
    //행이나 열의 시작점과 끝점이 같다면(인덱스가 같다는 뜻) 더 이상 사분할 수 없다는 뜻
    //해당 인덱스를 가진 arr을 리턴한다.

    const aux = (rs, re, cs, ce) => {
        //base case
        if (rs === re) return String(arr[rs][cs])

        let rowMid = Math.floor((rs + re) / 2)//내림차순으로 특정 행의 인덱스를 중간지점으로 잡는다.
        let colMid = Math.floor((cs + ce) / 2)//내림차순으로 특정 열의 인덱스를 중잔지점으로 잡는다.

        //각 사분면의 행열 시작점, 끝점을 대입한다.
        let leftUpper = aux(rs, rowMid, cs, colMid)
        let rightUpper = aux(rs, rowMid, colMid + 1, ce)
        let leftLower = aux(rowMid + 1, re, cs, colMid)
        let rightLower = aux(rowMid + 1, re, colMid + 1, ce)

        let result = leftUpper + rightUpper + leftLower + rightLower
        if (result === '0000' || result === '1111') {
            return leftUpper// 사분면중 아무데나 가능, 다 똑같으니까
        } else {
            return result
        }
    }

    let compressed = aux(0, arr.length - 1, 0, arr.length - 1)//'1100101011100011'이런 문자열 생성
    console.log(compressed)
    let findZero = compressed.split('').filter(el => el == '0').length
    console.log([findZero, compressed.length - findZero])
}

solution([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1]]) //[7,9]

solution([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1]])//[ 31, 33 ]