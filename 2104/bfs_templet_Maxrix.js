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

    /*N = 5일 때, [[0,1],[2,3],[3,4],[3,5]]를 행과 열로 보면서 각 위치에 1을 표시
        [
            [0,1,0,0,0,0], row 0은 col 1과 연결되어있다.[0,1] 연결여부를 0,1로 표시
            [1,0,0,0,0,0], row 1은 col 0과 연결되어있다.[1,0]
            [0,0,0,1,0,0], row 2는 col 3과 연결되어있다.[2,3]
            [0,0,1,0,1,1],...
            [0,0,0,1,0,0],...
            [0,0,0,1,0,0]...
        ]
    */
    for (let e = 0; e < edges.length; e++) {
        const [src, dst] = edges[e];
        matrix[src][dst] = matrix[dst][src] = 1;
    }

    function bfs(start, isVisited) {
        // 이미 지나온 길은 다시 보지 않는다.
        const isEmpty = Q => Q.length === 0;
        const enQ = (Q, ele) => Q.push(ele);
        const deQ = Q => Q.shift();

        // 시작점을 하나 넣고 시작함.
        const Q = [start];//[0]
        isVisited[start] = true;//[t,f,f,f,f,f]
        while (isEmpty(Q) === false) {
            const now = deQ(Q); // 0
            // now로부터 할 수 있는 선택, 방향, 옵션 => 루프
            for (let col = 0; col < C; col++) {
                //방문하지 않은 row이고, 지정한 매트릭스의 행열이 1일 경우
                //Q에 값을 넣고 isVisited를 true로 한다.
                if (isVisited[col] === false && matrix[now][col] === 1) {
                    enQ(Q, col);
                    isVisited[col] = true
                    console.log(`isVisited=${isVisited}`)
                }
            }
        }
    }

    let cnt = 0;
    const isVisited = Array(N).fill(false);
    for (let i = 0; i < N; i++) {
        if (isVisited[i] === false) {
            bfs(i, isVisited)
            cnt++
            console.log(`cnt:${cnt}`)
        }
    }

    console.log(cnt);
}


connectedVertices([
    [0, 1],
    [2, 3],
    [3, 4],
    [3, 5],
])
connectedVertices([
    [0, 1],
    [2, 3],
    [4, 5],
])
connectedVertices([
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
])