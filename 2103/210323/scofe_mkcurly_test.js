function mkcurly(length, route) {
    let arr = String(route).split("").map(el => Number(el))
    // console.log(length)
    // console.log(arr)
    let count = 0;
    let aux = (arr, idx) => {

        if (idx === length - 1) { count++ }
        if (arr[idx] === 1) {
            aux(arr, (idx + 1))
            aux(arr, (idx + 2))
        } else {
            return
        }
    }
    aux(arr, 0)

    console.log(count)
}

// mkcurly(4, 1111)
// mkcurly(4, 1101)
mkcurly(5, 11111)
