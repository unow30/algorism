/*
 어려운 문제는 아니였으나 경우의 수를 고려하다가 시간을 많이 허비했다.
 - 당첨번호 개수에 따라 1등부터 6등까지를 표시하는 객체를 만들어 당첨 숫자에 따른 최대, 최저 등수를 배열로 리턴했다.
 - 0을 제외한 당첨번호를 배열로 담고, 0의 개수를 변수에 담았다.
 - 당첨번호 개수 + 0의 개수가 가장 높은 등수를 나타내고, 당첨번호 개수만으로 가장 낮은 등수를 나타낸다.
*/
function solution(lottos, win_nums) {
    var answer = [];
    //최고순위와 최저 순위를 배열로 나타내야 한다.
    //0은 알 수 없는 값이다. 두 변수 길이는 6이다.
    //가장 높은 경우, 가장 낮은 경우를 찾아라.

    let obj = { "1": 6, "2": 5, "3": 4, "4": 3, "5": 2, "6": 1 } //"당첨번호 개수": 등수
    let correct_nums = []
    let zero_nums = 0 //지워진 당첨번호 개수

    lottos.forEach(el => {
        if (win_nums.includes(el)) correct_nums.push(el)
        if (el === 0) zero_nums++
    })

    // console.log(zero_nums)
    // console.log(correct_nums)

    if (zero_nums == 6) return console.log([1, 6])
    if (correct_nums.length == 6) return console.log([1, 1])
    if (correct_nums.length == 0) return console.log([zero_nums, 6])

    answer.push(obj[correct_nums.length + zero_nums])
    answer.push(obj[correct_nums.length])

    console.log(answer);
}

solution([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])//[1,1]
solution([5, 0, 21, 17, 0, 30], [4, 5, 17, 22, 15, 20])//[3,5]
solution([0, 0, 0, 0, 0, 6], [14, 45, 12, 29, 19, 6])//[1,6]
solution([0, 0, 0, 0, 0, 5], [14, 45, 12, 29, 19, 6])//[2,6]

/*
 마지막 solution의 경우의 수를 맞추지 못해 계속 고민했다.
 구분할 수 있는 lottos 번호가 win_nums와 하나도 맞지 않는 경우를 고려해야 했다.
 이 경우 correct_nums는 빈 배열이 되며 [최고등수, undefined]가 나오게 된다.
 correct_nums.length가 0인 경우에 리턴하는 경로를 만들어 문제를 해결했다.
*/