## 설명
>
해설: 순서를 따지지 않은 숫자의 집합 
표기법: nCm
예 : nCm=  nPm  ÷  m // 45C6 =  45P6  ÷  6!
발음: 사십오 콤비네이션 육 이라고 읽음.배열에서 3개를 선택하는 경우

## 알고리즘 생각
>1. 하나의 수를 선택한다.
2. n개를 뽑는 순열중 하나의 수를 선택했으니 남은 배열에서 n-1개를 선택해야한다.
>
이 두 과정을 반복하면 순열,조합,중복순열을 구할 수 있다.
순열, 조합, 중복순열들은 서로 남은 배열을 설정해주는 과정에서만 차이가 있다.


## 손(컴)파일 compile 예상
> "ABCDE" 중에서 3개를 선택하여 출력할 수 있는 경우의 수를 구하시오.
>
1. 첫 for문에서 각 요소를 하나씩 선택한다.
- A
- B
- C
- D
- E
>
2. 1에서 선택한 요소를 유지하는 for문을 돌려서 두개의 요소를 선택하는 경우의 수를 만든다. 
- A 선택한 for문: AB AC AD AE
- B 선택한 for문: BC BD BE
- C 선택한 for문: CD CE
- D 선택한 for문: DE
- E는 다음 요소가 없으므로 선택할 수 없다.
>
3. 2에서 선택한 요소를 유지하는 for문을 돌려서 세개의 요소를 선택하는 경우의 수를 만든다.
- AB를 선택한 for문: ABC ABD ABE
- AC를 선택한 for문: ACD ACE
- AD를 선택한 for문: ADE
- AE는 다음 요소를 선택할 수 없다.
>
>
- BC를 선택한 for문: BCD BCE
- BD를 선택한 for문: BDE
- BE는 다음 요소를 선택할 수 없다.
>
>
- CD를 선택한 for문: CDE
- CE는 다음 요소를 선택할 수 없다.
>
>
- DE는 다음 요소를 선택할 수 없다.
=> 총 10개의 경우의 수가 나온다.

## 알고리즘 구현
> - 재귀함수로 구현한다.
- 각 for문에서 재귀가 반복되는데, 반복될 당시의 idx를 다음 재귀에서 기억해야 중복을 피한다.
- base case는 기억하는 요소의 개수가 찾으려는 요소의 개수와 일치하면 값을 return해야 한다.

```js
let letters = "ABCDE"
function combination(letters, pickNum){
  let result = []
  //재귀함수, letters의 문자열 str을 받아 다음 문자와 연결해야 한다.
  //다음 index를 기억해야 한다.
  let aux = (str, lastIdx) =>{
  	//base case
    if(str.length === pickNum){
    	result.push(str)
      	return
    }
    
    //recursive case
  	for(let i = lastIdx+1; i < letters.length; i++){
       aux(str+letters[i], i)
    }  
    
  }
  
  //문자열 1개를 선택하는 경우부터 시작하기 위해 ""를 입력
  //for i가 0부터 시작하고 i의 크기를 1씩 늘려야 str에 다음 문자를 붙일 수 있다.
  aux("", -1)
  console.log(result) // aux("", -1)가 전부 재귀한 다음 result의 값을 출력한다.
}
combination(letters, 3)
```


## 실행결과
![](https://images.velog.io/images/unow30/post/62c97d31-6a53-4ea0-af66-4d042a2e415b/image.png)