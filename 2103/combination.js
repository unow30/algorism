const population = "ABCDEFGHI"

/*
    조합(콤비네이션, combination)
    순서를 따지지 않는 요소의 집합
    nCm
    예시: nCm = nPm / m!
          4C3 = 4P3 / 3!

    n이 11!이면 39M 3천 9백만
    n이 12!면 500M 5억 정도의 경우의 수가 나온다.
    시간복잡도 1억 이상 넘어가면 못푼다. 그러니 순열 문제가 아니다.

*/

function combination(population, pickNum) { //"ABCDEFGHI", 3 시작
    const result = []
    const aux = (str, lastIdx) => {
        // base case
        if (str.length === pickNum) {
            result.push(str)
            return
        }

        // recursive case
        for (let idx = lastIdx + 1; idx < population.length; idx++) {
            aux(str + population[idx], idx)
        }
    }

    aux("", -1)
    console.log(result)
}

//"ABCDEFGHI" 9개 중 3개를 나열하는 경우의 수 9C3
combination(population, 3)
/*
    aux("", -1) 시작

    1. A부터 시작하는 for문 재귀
    (1-1) for 0 ~ 9까지 반복, idx 0일때 aux("A", 0)
        (1-2) for 1 ~ 9까지 반복, idx 1일때 aux("AB", 1)
            (1-3) for 2 ~ 9까지 반복, idx 2일때 aux("ABC", 2)
                (1-4) str.length === pickNum이므로 result에 push된다. return되면 1-3에서 idx 3일때 aux("ABD",3)가 시작
                      idx가 9가 될 때까지 "AB"에 다음 알파벳이 붙는다.

    2. B부터 시작하는 for문 재귀
    (2-1) for 1 ~ 9까지 반복, idx가 1일때 aux("B", 1)
        (2-2) for 2 ~ 9까지 반복, idx 2일때 aux("BC", 2)
            (2-3) for 3 ~ 9까지 반복, idx 2일때 aux("BCD", 3)
                (2-4) str.length === pickNum이므로 result에 push된다. return되면 2-3에서 idx 3일때 aux("BCE",4)가 시작
                      idx가 9가 될 때까지 "BC"에 다음 알파벳이 붙는다.
*/