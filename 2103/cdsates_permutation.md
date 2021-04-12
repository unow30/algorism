## 발표 순서
### 문제
>말썽꾸러기 김코딩은 오늘도 장난을 치다가 조별 발표 순서가 담긴 통을 쏟고 말았습니다.
>
선생님께서는 미리 모든 발표 순서의 경우의 수를 저장해 놓았지만 김코딩의 버릇을 고치기 위해 문제를 내겠다고 말씀하셨습니다.
>
김코딩은 모든 조별 발표 순서에 대한 경우의 수를 차례대로 구한 뒤, 선생님께서 숫자를 말하면 그 순서에 맞는 경우의 수를 말해야 하고, 발표 순서를 말하면 이 발표순서가 몇번째 경우의 수인지를 대답해야 합니다.
>
총 학생의 수 N과 선생님이 말하는 k가 주어질 때, 김코딩이 정답을 말 할 수 있게 올바른 리턴 값을 구하세요.
>
모든 경우의 수가 담긴 배열은 번호가 작을수록 앞에 위치한다고 가정합니다.
ex) N = 3일경우, [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

### 입력
>인자 1: n
Number 타입의 1 <= N <= 20인 조의 갯수
>
인자 2: k
k가 Number 일 때, k번째 배열을 리턴합니다.
>
ex) n이 3이고 k가 3일 경우
>
모든 경우의 수를 2차원 배열에 담는다면 [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]이 되고,
>
반환하는 값은 [2, 3, 1]이 됩니다.
>
k가 Array일 때, 몇 번째인지를 리턴합니다. (0 <= index 입니다.)
ex) n이 3이고 k가 [2, 3, 1]일 경우
>
모든 경우의 수를 2차원 배열에 담는다면 [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]이 되고,
>
반환하는 값은 3이 됩니다.

### 주의사항
>k내에 중복되는 요소는 없다고 가정합니다.

### 입출력 예시
```js
let output = orderOfPresentation(3, 3);
console.log(output); // [2,3,1]

let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3
```

```js
function orderOfPresentation(n, k) {
    // TODO: 여기에 코드를 작성합니다.
    let result = []
    let arr = Array.from(Array(n), (_, idx) => (idx + 1))

    let aux = (arr, m = []) => {
        if (m.length == n) result.push(m)

        for (let i = 0; i < arr.length; i++) {
            let current = arr.slice()
            let removed = current.splice(i, 1)
            aux(current.slice(), m.concat(removed))
        }
    }
    aux(arr)
    //console.log(result)
    if (!Array.isArray(k)) {
        return console.log(result[k])
    }
    return console.log(result.findIndex(e => String(e) === String(k)));
}
//String([1,2,3,4]) -> "1,2,3,4"

// orderOfPresentation(3, 3)
orderOfPresentation(3, [2, 3, 1])
```
