
## 배송 전략 실험

### 문제 설명
  > 최근 마켓컬리에서는 배송 효율을 높이기 위해 다양한 실험을 진행하고 있다. 다음은 그 실험 중 하나에 대한 규칙이다.
  >
  1. 배송해야 할 경로를 직선화한 다음 방문해야 하는 곳을 1로, 방문하지 말아야 할 곳을 0으로 표기했다.
  2. 이 실험은 가장 기초적인 단계이기 때문에 우선 각 문자 사이의 간격을 1칸으로 정의했다.
  3. 해당 경로를 지나는 택배기사는 한 번에 1칸 또는 2칸 움직일 수 있다.
  >
  이렇게 환경을 설정했을 때 배송기사가 왼쪽 끝에서 오른쪽 끝으로 도달하기까지 몇 가지 경우의 수를 둘 수 있는지 확인하고자 한다. 예를 들어 경로의 길이가 3이고 경로가 `111`로 표기되어 있다고 가정하자. 이런 경우 배송기사는 총 2가지 경우를 고려할 수 있다.
>
![](https://images.velog.io/images/unow30/post/5d776938-e086-4516-9b36-8eb1c0340704/image.png)
>
이 경우 배송기사가 한 번에 이동할 수 있는 거리가 2칸으로 제한되므로 위와 같은 1가지 경우 외엔 선택지를 가질 수 없다.
>
경로의 길이와 경로의 구성이 주어였을 때 배송기사가 왼쪽 끝에서 오른쪽 끝까지 도달할 수 있는 경우의 수가 총 몇 개인지 구해보자.

  ### 입력
  > 첫 줄에 경로의 길이를 의미하는 자연수 `N(3<= N <=50)`이 주어진다.
  >
  두 번째 줄에 길이가 N이며 0과 1로 구성된 경로구성이 주어진다. 첫 문자와 끝 문자는 항상 1이며, 0이 두 번 연속으로 들어오는 경우는 없다.

  ### 출력
  > 배송기사가 왼쪽 끝에서 오른쪽 끝까지 도달할 수 있는 경우의 수가 총 몇 개인지 출력한다.
  
  ### 입출력 예
- 예시 1 
  >- 입력
  3
  111
  >
  - 출력
  2


- 예시 2
  >- 입력
  4
  1101
  - 출력
  1
  
- 예시 3
  >- 입력
  5
   11111
  - 출력
	5

```js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		console.log('Hello Goorm! Your input is', line);
		rl.close();
	}
	
	process.exit();
})();

```
```js
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
```
