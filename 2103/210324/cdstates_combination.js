function boringBlackjack(cards) {
    // TODO: 여기에 코드를 작성합니다.
    let addCards = []
    let count = 0

    let aux = (arr, idx) => {
        if (arr.length == 3) {
            addCards.push(arr.reduce((acc, cur) => acc + cur))
        }

        for (let i = idx; i < cards.length; i++) {
            let curCard = cards.slice()
            let removed = curCard.splice(i, 1)
            let curArr = arr.slice()
            aux(curArr.concat(removed), i + 1)
        }
    }
    aux([], 0)

    addCards.forEach(el => {
        for (let i = 2; i < el / 2; i++) {
            if (el % i === 0) return;
        }
        count++
    })
    console.log(count)

}
// boringBlackjack([1, 2, 3, 4, 5])
// boringBlackjack([2, 7, 9, 11, 17, 23, 29, 31, 35, 39, 43])
boringBlackjack([3, 5, 7, 11, 19, 22, 27, 29, 33, 39, 41, 49])