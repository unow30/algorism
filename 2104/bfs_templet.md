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
메트릭스를 사용한 방식
function connectedVertices(edges) {
    /*
        노드 중 가장 큰 값을 선택
        [[0,1],[2,3],[3,4],[3,5]] = 가장 큰 수는 5
    */
    let N = 0;
    for (let e = 0; e < edges.length; e++) {
        const [src, dst] = edges[e];//a와 b가 연결된 상태
        N = Math.max(N, src, dst);
    }


    /*N = 5일 때
        [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ]
    */
    const INIT_VAL = 0
    const matrix = Array(N + 1).fill(0).map(row => Array(N + 1).fill(INIT_VAL))
    const R = matrix.length;
    const C = matrix[0].length;

    /*N = 5일 때, [[0,1],[2,3],[3,4],[3,5]] [3,5]는 matrix 외부
        [
            [0,1,0,0,0,0], row 0은 col 1과 연결되어있다.[0,1] 연결여부를 0,1로 표시
            [1,0,0,0,0,0], row 1은 col 0과 연결되어있다.[1,0]
            [0,0,0,1,0,0], row 2는 col 3과 연결되어있다.[2,3]
            [0,0,1,0,1,1],...
            [0,0,0,1,0,1],...
            [0,0,0,0,1,0]...
        ]
    */
    for (let e = 0; e < edges.length; e++) {
        const [src, dst] = edges[e];
        matrix[src][dst] = matrix[dst][src] = 1;
    }

    function bfs(start, isVisited) {//1, [t,f,f,f,f]
        // 이미 지나온 길은 다시 보지 않는다.
        const isEmpty = Q => Q.length === 0;
        const enQ = (Q, ele) => Q.push(ele);
        const deQ = Q => Q.shift();

        // 시작점을 하나 넣고 시작함.
        const Q = [start];
        isVisited[start] = true;//[t,t,f,f,f]
        while (isEmpty(Q) === false) {
            const now = deQ(Q); // 1
            // now로부터 할 수 있는 선택, 방향, 옵션 => 루프
            for (let col = 0; col < C; col++) {
                if (isVisited[col] === false && matrix[now][col] === 1) {
                    enQ(Q, col);
                    isVisited[col] = true
                }
            }
        }
    }

    let cnt = 0;
    const isVisited = Array(N).fill(false);
    for (let i = 0; i <= N; i++) {
        if (isVisited[i] === false) {
            bfs(i, isVisited)
            cnt++
        }
    }

    console.log(cnt);
}


connectedVertices([//2
    [0, 1],
    [2, 3],
    [3, 4],
    [3, 5],
])
connectedVertices([//3
    [0, 1],
    [2, 3],
    [4, 5],
])
connectedVertices([//1
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
])
```

```js
리스트를 사용한 방식
function connectedVertices(edges) {

    //최대 버텍스(정점)를 찾는다.
    //[[0, 1],[2, 3],[3, 4],[3, 5],], maxVertex = 5
    let maxVertex = 0;
    for (let e = 0; e < edges.length; e++) {
        const [src, dst] = edges[e];
        maxVertex = Math.max(maxVertex, src, dst);
    }
    console.log(maxVertex)

    //인접 리스트 형식, 행렬로도 가능
    const adjList = {};

    //인접 리스트에 최대 버텍스 크기만큼 반복해 버텍스를 만든다
    for (let i = 0; i <= maxVertex; i++) {
        adjList[i] = []
    }
    console.log(adjList)

    /*
        edges를 순회하며, (무향그래프이므로 쌍방으로) 간선을 연결해준다.
        key가 시작점, value가 끝점이다.
        [0, 1],[2, 3],[3, 4],[3, 5]
        {
            '0': [ 1 ], [0,1]을 표현함
            '1': [ 0 ], [1,0]을 표현함
            '2': [ 3 ], [2,3]을 표현함
            '3': [ 2, 4, 5 ], 3은 2,4,5와 붙어있으니 [2,4,5]
            '4': [ 3 ], [4,3]을 표현함
            '5': [ 3 ] [5,3]을 표현함
        }
    */
    for (let i = 0; i < edges.length; i++) {
        adjList[edges[i][0]].push(edges[i][1])
        adjList[edges[i][1]].push(edges[i][0])
    }
    console.log(adjList)

    //방문한 버텍스를 담을 객체를 선언
    const visited = {};
    //컴포넌트가 몇 개인지 카운트할 변수를 선언
    let count = 0;
    //vertex는 정점이다. 0~5까지의 정점이 어떤 값과 이어져있는지 확인한다.
    for (let vertex = 0; vertex <= maxVertex; vertex++) {
        console.log("visited")
        console.log(visited)
        if (!visited[vertex]) {
            bfs(adjList, vertex, visited)//리스트의 한 값이 방문했는지 확인,
            count++
        }
    }
    console.log(count)
}

function bfs(adjList, vertex, visited) {
    //bfs는 가장 가까운 정점부터 탐색하므로, queue를 사용한다.
    //queue에 버텍스를 담는다. 이것을 버텍스에 방문했다고 지정한다.
    //버텍스를 방문했기 때문에 visited에 담고 true를 준다.
    const queue = [vertex]
    visited[vertex] = true;

    //queue의 길이가 0일 때까지 순환한다.
    //방문한 버텍스를 shift하여 adjList의 key로 지정한다.
    //adjList[adjList[key][i]]값을 방문했는지 확인한다. 방문안하면 queue에 방문 안한 값을 넣고 방문했다고 표시한다.
    while (queue.length > 0) {
        console.log("queue")
        console.log(queue)

        const cur = queue.shift();
        for (let i = 0; i < adjList[cur].length; i++) {//245
            if (!visited[adjList[cur][i]]) {
                queue.push(adjList[cur][i])
                visited[adjList[cur][i]] = true
            }
        }
    }
}

connectedVertices([
    [0, 1],
    [2, 3],
    [3, 4],
    [3, 5],
])
```