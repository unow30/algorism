/*
progress는 진행절차, speeds는 하루에 진행되는 속도
progress[0]부터 배포가 시작되야 한다. progressse가 100이 되어도 바로 배포할 수 없다.
if(progresses[0] == 100) answer.push(progresses.shift()))
progresses요소는 100까지만 채워지도록 한다. progresses[0]이 100이 되면 answer에 첫 요소에 +1 한다.
남은 progresses는 재귀로 돌린다.


[93 30 55][1 30 5] 시작
[94 60 60] 1일차
[95 90 65] 2일차
[96 100+ 70] 3일차, [1]번째 요소 100달성, 기다림
[99 100 75] 4일차
[100+ 100 80] 5일차, [0]번째 요소 100 달성, answer[0]에 +=1, progresses.shift() answer:[1]
[100 80] 아직 5일차, [0]번째 요소 100이니 answer[0]에 +=1, progresses.shift()] answer:[2]
[85] [90] [95] [100] 9일차에 남은 요소 100달성, answer[1]에 +=1, progresses.shift()answer:[2,1]
progresses.length == 0이므로 종료
*/

function solution(progresses, speeds) {
    var answer = [0];
    let remainDays = [];
    progresses.forEach((el, idx) => {
        remainDays.push(Math.ceil((100 - el) / speeds[idx]))
    })

    let cur = remainDays[0]
    for (let i = 0, j = 0; i < remainDays.length; i++) {
        if (remainDays[i] <= cur) {
            answer[j]++
        } else {
            cur = remainDays[i]
            answer[++j] = 1
        }
    }


    console.log(answer)
    /*
      진행완료까지 남은 작업일수를 구한다.
      배열의 [0]번째 값을 실제 경과일로 지정한다.
      남은 작업일수 배열의 길이만큼 반복하여 각 배열의 요소가 실제 경과일보다 작거나 같다면 그 작업은 진행이 완료된 것으로 본다.
      (경과일에 도달했거나 이미 완성되고 앞의 과정을 기다리는 중)
    
      배열의 요소가 경과일보다 크다면 그 작업은 아직 작업중인 것이다. 이전 작업과 같이 끝나지 않는다.
    
      끝나는 날이 [7,3,9]일 경우, [0]과 [1]은 같은 날 배포된다. [2]는 [0]과 [1]이 배포된 날 이후에 배포된다.
      [1,1,2,1,5,3]일 경우, [0]과 [1]은 같은 날 배포된다. [2]는 [0]과 [1]이 배포된 날 이후에 배포되며, 이 때 [2],[3]이 같이 배포된다. [4]는 [2],[3]이 배포된 날 이후에 배포되며, 이 때 [4],[5]가 같이 배포된다.
    */
}
solution([93, 30, 55], [1, 30, 5])//[2,1]
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])//[1,3,2]