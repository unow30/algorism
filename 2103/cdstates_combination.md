## 블랙잭은 지겨워
## 문제
>평범한 블랙잭 게임에서 수시로 패배하자 흥미가 떨어진 김코딩은 박타짜에게 게임룰을 변형하여 새로운 카드 놀이를 해 볼 것을 제안합니다.
새로운 룰은 다음과 같습니다.
>
1. 숫자로 이루어진 카드를 여러 장 받습니다.
2. 3장씩 카드를 고르고, 3장에 적힌 숫자들의 합이 소수인지 확인합니다.
3. 받아든 카드로 만들 수 있는 소수의 개수가 많은 사람이 이기게 됩니다.
>
예로, [1, 2, 3, 4]라는 카드를 받았을 때 만들 수 있는 숫자는 6, 7, 8, 9이고, 소수는 7 하나이기 때문에 가지고 있는 소수의 개수는 1개입니다.
>
[2, 3, 4, 8, 13]라는 카드를 받았을 때 만들 수 있는 숫자는 9, 13, 18, 14, 19, 23, 15, 20, 24, 25이고, 소수는 13, 19, 23 총 3개이기 때문에 가지고 있는 소수의 개수는 3개입니다.
>
게임을 진행하기 전에 소수에 대해 아무런 지식이 없는 박타짜는 게임을 며칠 미룬 뒤, 게임의 룰을 따르는 함수를 만들기로 했습니다.
>
소수에 약한 박타짜를 도와 여러 장의 카드 중 세 장씩 조합해 소수가 되는 경우의 수를 리턴하는 함수를 완성해 주세요.
>

### 입력
>인자 1
cards: Array 3개 이상 50개 이하의 카드가 숫자로 들어 있는 배열

### 출력
>Number 타입을 리턴해야 합니다.

### 주의사항
> cards 에는 중복된 숫자의 카드는 들어있지 않습니다.
각 카드에 적힌 수는 1이상 1,000이하의 자연수입니다.

### 입출력 예시
```js
let output = boringBlackjack([1, 2, 3, 4]);
console.log(output); // 1

let output = boringBlackjack([2, 3, 4, 8, 13]);
console.log(output); // 3
```
```js
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
```
