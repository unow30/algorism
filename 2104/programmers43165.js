function solution(numbers, target) {

    let aux = (idx, cur) => {
        if (idx == numbers.length) {
            if (cur == target) return 1
            return 0
        }

        return aux(idx + 1, cur + numbers[idx]) + aux(idx + 1, cur - numbers[idx])
    }


    return aux(0, 0);
}