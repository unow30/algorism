const gcd = require('./gcd')

/*
    a=120, b=40일 때 두 수의 배수는 다음과 같다.
    a: 120 240 360 480 600..
    b: 40 80 120 160 200 240..
    공배수는 120, 240..이며 최소공배수는 120이다.
*/
let a = 120
let b = 40

const lcm = (a * b) / gcd(a, b)
console.log(lcm)

/*
    a,와 b의 최대공약수를 a와 b의 곱에다 나누면 그 값은 최소공배수가 된다.
    1. 20과 5의 최대공약수는 5이다.
    20* 5 = 100

    2. 20의 배수는 20 40 60 80 100...
    5의 배수는 5 10 15 20 25...
    최소공배수는 20이 된다.

    3. a와 b의 곱은 100이다.
    100의 약수를 구하면 1 2 4 5 20 25 50 100이다.
    100의 약수 한 쌍을 고르고, 거기에 최대공약수를 나눈다면 최소공배수 값이 나온다.
    2*50/5 = 20, 4*25/5 = 20, 5*20/5= 20 => a*b/5 = 20

*/