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