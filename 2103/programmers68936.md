/*
## 쿼드압축 후 개수 세기

### 문제 설명
  > 0과 1로 이루어진 2n x 2n 크기의 2차원 정수 배열 arr이 있습니다. 당신은 이 arr을 쿼드 트리와 같은 방식으로 압축하고자 합니다. 구체적인 방식은 다음과 같습니다.
  >
1. 당신이 압축하고자 하는 특정 영역을 S라고 정의합니다.
2. 만약 S 내부에 있는 모든 수가 같은 값이라면, S를 해당 수 하나로 압축시킵니다.
3. 그렇지 않다면, S를 정확히 4개의 균일한 정사각형 영역(입출력 예를 참고해주시기 바랍니다.)으로 쪼갠 뒤, 각 정사각형 영역에 대해 같은 방식의 압축을 시도합니다.
>
arr이 매개변수로 주어집니다. 위와 같은 방식으로 arr을 압축했을 때, 배열에 최종적으로 남는 0의 개수와 1의 개수를 배열에 담아서 return 하도록 solution 함수를 완성해주세요.

  ### 제한사항
  >- arr의 행의 개수는 1 이상 1024 이하이며, 2의 거듭 제곱수 형태를 하고 있습니다. 즉, arr의 행의 개수는 1, 2, 4, 8, ..., 1024 중 하나입니다.
   - arr의 각 행의 길이는 arr의 행의 개수와 같습니다. 즉, arr은 정사각형 배열입니다.
   - arr의 각 행에 있는 모든 값은 0 또는 1 입니다.
  
  ### 입출력 예
  | numbers                                                                                                                                           | result  |
  | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
  | [[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]                                                                                                         | [4,9]   |
  | [[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]] | [10,15] |

![](https://images.velog.io/images/unow30/post/05b4c0db-b1ac-4bef-ba85-6a59315ad6bc/image.png)
![](https://images.velog.io/images/unow30/post/de3a66b1-c214-40ed-b6b2-07cca33a14ff/image.png)

*/
```js
function solution(arr) {
    var answer = [];
    return answer;
}
```
```js
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
```
