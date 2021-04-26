function solution(n, computers) {

    let newComs = computers
    // newComs.forEach((_, idx)=>{
    //     newComs[idx][idx] = 0
    // })
    let visited = Array(n).fill(false);
    let cnt = 0
    for (let i = 0; i < n; i++) {
        if (visited[i] == false) {
            bfs(i, visited, newComs);
            cnt++
        }
    }
    return cnt

}

function bfs(start, visited, computers) {
    const enQ = (Q, ele) => Q.push(ele);
    const deQ = (Q) => Q.shift();
    const isEmpty = (Q) => Q.length === 0;

    const Q = [start];
    visited[start] = true;

    //vertex a, b, c
    while (isEmpty(Q) == false) {
        let nowVertex = deQ(Q);
        for (let col = 0; col < computers.length; col++) {
            if (visited[col] == false && computers[nowVertex][col]) {
                enQ(Q, col);
                visited[col] = true;
            }
        }
    }

}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]))