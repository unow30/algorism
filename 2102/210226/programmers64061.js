/*
## 크레인 인형뽑기 게임
링크: https://programmers.co.kr/learn/courses/30/lessons/64061
### 문제 설명
  > 1.정수 배열 numbers가 주어집니다. 
    2. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
    3. 

  ### 제한사항
  >1.numbers의 길이는 2 이상 100 이하입니다.
   2.numbers의 모든 수는 0 이상 100 이하입니다.
   3.
  
  ### 입출력 예
  | numbers     | result        |
  | ----------- | ------------- |
  | [2,1,3,4,1] | [2,3,4,5,6,7] |
  | [5,0,2,7]   | [2,5,7,9,12]  |
*/
```js
function solution(numbers) {
    var answer = [];
    
}
```

function solution(board, moves) {
    var answer = 0;
    var basket = []//끌어올린 인형이 담기는 곳

    moves.map((el, idx) => {
        for (let i = 0; i < board.length; i++) {//행
            if (board[i][el - 1] !== 0) {//0행 el-1열, 1행 el-1열, 2행 el-1열 ...
                basket.push(board[i][el - 1])

                if (basket[basket.length - 1] === basket[basket.length - 2]) {//basket 배열의 끝에 2개의 인형 확인
                    answer += 2
                    basket.splice(basket.length - 2, 2)
                }

                board[i][el - 1] = 0

                break
            }
        }
    })


    return answer;
}


//격자의 가장 아래 칸부터 차곡차곡 쌓여 있습니다.  
//filo
//크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 
//board의 숫자는 각각 다른 인형을 의미 같은숫자는 같은 인형
//moves의 숫자 12345는 board의 [0][n]~[4][n]을 가르킨다.
/*
    0 0 0 0 0
    0 0 1 0 3
    0 2 5 0 1
    4 2 4 4 2
    3 5 1 3 1
    이 때 moves가 [1,5,3,5,1,2,1,4]이라면 바구니에 인형이 쌓이는 순서는 다음과 같다.
    [4 3 1 1 3 2 4]
    11이 연속되어 사라지고, 33이 연속되어 사라진다.
    터트려서 사라진 인형의 개수는 4개가 된다.
    board[j][i]
*/