/*
    최대공약수
    a=10, b=2일 때 두 수의 약수는 다음과 같다.
    10: 1 2 5 10
    2: 1 2 
    두 수의 최대공약수는 2가 된다.

    최대공약수를 구하는 함수를 만들 때, 함수에 들어가는 숫자의 대소관계를 명확히 알아야 한다.
    함수 내에서 매게변수 a, b를 Math.Max(a, b) 형식으로 크기를 파악할 수도 있지만
    아래 재귀함수처럼 a,b를 나눈 나머지 값으로 대소관계를 확인할 수 있다.
*/

module.exports = function gcd(a, b) { //30 24
    if (b === 0) {
        return a
    }

    return gcd(b, (a % b))
}

/*
    >
   유클리드 호재법
   - 2개의 자연수 또는 정식(整式)의 최대공약수를 구하는 알고리즘의 하나이다.
   - 호제법이란 말은 두 수가 서로(互) 상대방 수를 나누어(除)서 결국 원하는 수를 얻는 것을 말한다.
   - 2개의 자연수(또는 정식) a, b에 대해서
     a를 b로 나눈 나머지를 r이라 하면(단, a>b), a와 b의 최대공약수는 b와 r의 최대공약수와 같다.

    a와 b를 나눈 값인 r을 b와 다시 나눠지게 하여 b가 0이 될 때까지 나눠주는 방법이다.
    a: 30, b:24일 때 최대공약수를 구하는 과정
    1. b !=0 이므로 b인 24는 함수의 a 자리에, a와 b를 나눈 나머지 r인 6은 함수의 b자리에 들어간다.
    2. 재귀함수에서 b != 0이므로 b인 6은 a 자리에, a % b인 0은 b의 자리에 들어간다.
    3. 재귀함수에서 b == 0이므로 이전 재귀에서 a를 나눈 b = 6이 최대공약수가 된다.
*/