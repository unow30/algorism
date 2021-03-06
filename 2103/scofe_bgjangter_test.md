
## 시선 이동

### 문제 설명
  > 번개장터에서는 사용자가 상품 목록 스크롤을 내릴 때 시선을 어디에 두는지 데이터를 수집하고 연구하는 중이다. 데이터팀에 속해있는 현지는 또 다른 간단한 실험을 다음과 같이 설계하여 진행하고자 한다.
>
1. 가로 길이가 N, 세로 길이가 M인 화면 정보가 주어진다. 해당 정보에서 'c'는 시선이 시작될 수 있는 지점을, 'x'는 비선호 콘텐츠를, '.'은 선호 콘텐츠를 의미한다. 
2. 화면 정보가 주어졌을 때, 비선호 콘텐츠를 피해 선호 콘텐츠만을 보면서 화면 최하단까지 이동하는 경로를 찾는다.
시선은 아래, 좌우 방향으로 움직일 수 있는데, 좌우로 가장 적게 이동한 경로를 '기준 경로'로 선택한다.
3. '기준 경로'를 찾은 뒤 실제 사용자의 시선 정보와 비교한다.
> 현지는 이 실험을 위해 먼저 '기준 경로'를 찾고자 한다. 예를 들어, 5*4 크기으 ㅣ정보가 아래와 같이 주어졌다고 가정하자.
 ```
 c.xc
 ....
 xx..
 ...x
 x..x
 ```
>화면 최상단의 모든 'c'는 시선의 시작 지점이 될 수 있고, 화면 최하단의 모든 '.'은 도착 지점이 될 수 있다. 만약 문자열과 위치를 행렬로 표현하면 시선은 `(0,0)`과 `(0,3)`에서 출발할 수 있다.
이 때 각 출발 지점에서 화면 최하단에 도달하는 가장 빠른 경로는 다음과 같다.
>1. `(0,0)`에서 출발할 경우
`(0,0)`->`(1,0)`->`(1,1)`->`(1,2)`->->`(2,2)`->`(3,2)`->`(4,2)`
2. `(0,3)`에서 출발할 경우
`(0,3)`->`(1,3)`->`(2,3)`->`(2,2)`->`(3,2)`->`(4,2)`->
>즉, 해당 케이스에서는 `(0,3)`에서 출발하여 좌우 이동을 한 번만 한 경로가 '기준 경로'로 선택된다.
>이렇게 화면의 모든 정보가 주어졌을 때, '기준 경로'에서 좌우이동한 횟수를 출력해보자.


  ### 입력
  > 첫 줄에 화면 크기가 가로, 세로 순서대로 공백으로 구분되어 주어진다. 가로 길이는 3이상 20 이하의 자연수, 세로 길이는 5이상 1000이하의 자연수이다.
  >
  두 번째 줄부터 화면 정보가 주어진다. 화면 정보는 세로 길이 만큼 줄바꿈으로 구분되어 주어지고, 각 줄마다 가로 길이만큼의 문자열로 구성된다. 즉, 항상 직사각형 모양으로 주어진다.
  >두 번째 줄의 문자열에는 'c'를 하나 이상 포함한다. 즉, 화면의 최상단에는 출발 지점이 항상 존재한다.

  ### 출력
  > 출발 지점에서 도착 지점까지 도달하기 위한 최소한의 좌우이동 횟수를 출력한다.
  만약 도착 지점에 도착할 수 없는 경우가 있다면 '-1'을 출력하라.
 
  
  ### 입출력 예
- 예시 1 
  >- 입력
   ```
  4 5
  c.xc
  ....
  xx..
  ...x
  x..x
  ```
  - 출력
  ```
  1
```
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