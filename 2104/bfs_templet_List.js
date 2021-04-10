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