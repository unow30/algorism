## 연결된 정점들
### 문제
>방향이 있는 간선들의 목록이 주어질 때, 연결된 정점의 컴포넌트(그룹들)가 몇 개인지 반환하는 함수를 작성하세요.

### 입력
>#### 인자 1: edges
- 2차원 Array 타입을 요소로 갖는 시작과 도착 정점이 담겨있는 배열들을 담고 있는 목록 (2차원 배열)
- ex) [[0, 1], [1, 2], [3, 4]]

### 출력
>- Number 타입을 리턴해야 합니다.
- 연결된 정점의 컴포넌트의 수를 숫자로 반환합니다.

### 주의사항
>- 주어진 간선은 무향입니다
- [1, 2] 는 정점 1에서 정점 2로도 갈 수 있으며, 정점 2에서 정점 1로도 갈 수 있습니다.

### 입출력 예시
```js
const result = connectedVertices([
	[0, 1],
	[2, 3],
	[4, 5],
]);
console.log(result); // 3
```

해당 정점들은 아래와 같은 모양을 하고 있습니다.
image1
```js
const result = connectedVertices([
	[0, 1],
	[2, 3],
	[3, 4],
	[3, 5],
]);
console.log(result); // 2
```
해당 정점들은 아래와 같은 모양을 하고 있습니다.
image2

```js
function connectedVertices(edges){
    let N = 0;
    for(let e = 0; e < edges.length; e++){
        const [src, dst] = edges[e];//a와 b가 연결된 상태
        N = Math.max(N, src, dst);
    }
    const MOVES = [
        //yDiff, xDiff
        [-1, 0]//up
        [1, 0],//down
        [0, 1],//right
        [0, -1]//left
    ]
    const INIT_VAL = 0
    const matrix = Array(N).fill(0).map(row=> Array(N).fill(INIT_VAL))
    const R = matrix.length;
    const C = matrix[0].length;

    for(let e = 0; e < edges.length>)    
}
```