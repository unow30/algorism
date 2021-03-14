## 설명
>
해설: n 의 수를 m 까지 n-1 씩하여 곱한 것.
표기법: nPm
예 : 45P6  = 45 x 44 x 43 x 42 x 41 x 40 m이 6 이기 때문에 (n - i) 한걸 모두 곱합 (i 는 0 부터 해서 6번)
발음: 사십오 퍼뮤테이션 육 이라고 읽음.

## 알고리즘 생각
>1. 하나의 수를 선택한다.
2.  하나의 수를 선택했으니 남은 배열에서 n-1개를 선택해야한다.
>
이 두 과정을 반복하면 순열,조합,중복순열을 구할 수 있다.
순열, 조합, 중복순열들은 서로 남은 배열을 설정해주는 과정에서만 차이가 있다.


## 손(컴)파일 compile 예상
> "ABCDE" 중에서 3개를 선택하여 출력할 수 있는 모든 경우의 수를 구하시오.
>
1. 첫 for문에서 각 요소를 하나씩 선택한다.
- A
- B
- C
- D
- E
>
2. 1에서 선택한 요소를 유지하는 for문을 돌려서 두개의 요소를 선택하는 경우의 수를 만든다. (자기 자신을 선택하지 않는다.)
   "ABCDE"에서 선택한 요소가 제거된 배열을 다시 넘긴다. ex: aux(A+"BCDE"?)
- A 선택한 for문: AB AC AD AE
- B 선택한 for문: BA BC BD BE
- C 선택한 for문: CA CB CD CE
- D 선택한 for문: DA DB DC DE
- E 선택한 for문: EA EB EC ED
>
1. 2에서 선택한 요소를 유지하는 for문을 돌려서 세개의 요소를 선택하는 경우의 수를 만든다.
- AB를 선택한 for문: ABC ABD ABE
- AC를 선택한 for문: ACB ACD ACE
- AD를 선택한 for문: ADB ADC ADE
- AE를 선택한 for문: AEB AEC AED
>
>
- BA를 선택한 for문: BAC BAD BAE
- BC를 선택한 for문: BCA BCD BCE
- BD를 선택한 for문: BDA BDC BDE
- BE를 선택한 for문: BEA BEC BED
....
>
=> 총 60개의 경우의 수가 나온다.
=> ABC ABD ABE ACD ACE ADE BCD BCE BDE CDE의 순서를 변경한 개수와 동일하다. 3! * 10
 

## 알고리즘 구현
> - 재귀함수로 구현한다.
- 각 for문에서 재귀가 반복되는데, 반복되는 for문은 처음부터 시작하되 자기 자신을 다시 선택할 수 없다.
- base case는 기억하는 요소의 개수가 찾으려는 요소의 개수와 일치하면 값을 return해야 한다.

```js
const population = "ABCDE"
function permutation(population, pickNum) {
    const result = []

    const aux = (str, arr) => {
        // base case
        if (str.length === pickNum) {
            result.push(str)
            return
        }

        // recursive case
        for (let idx = 0; idx < arr.length; idx++) {

            aux(str + arr[idx], arr.replace(arr[idx], ""))
        }
    }

    aux("", population)
    console.log(result)
}

permutation(population, 3)
/*
    recursive case loagic

        aux(a, bcde)
            ㄴaux(ab, cde), aux(ac, bde), aux(ad, bce), aux(ae, bcd)
              ㄴaux(abc, de) ㄴaux(acb, de) ㄴaux(adb, ce) ㄴaux(aeb, cd)
                ㄴaux(abd, be)  aux(acd, be)   ㄴaux(adc, be)  ㄴaux(aec, bd)
                  ㄴaux(abe, cd)  ㄴaux(ace, bd)  ㄴaux(ade, bc)  ㄴaux(aed, bc)
        aux(b, acde)
        ...
        aux(c, abde)
        ...
        aux(d, abce)
        ...
        aux(e, abcd)
        ...
*/
```


## 실행결과
![](https://images.velog.io/images/unow30/post/62c97d31-6a53-4ea0-af66-4d042a2e415b/image.png)

