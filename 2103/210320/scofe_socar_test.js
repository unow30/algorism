function socar(num, times) {
    let arriveTime = []
    let leaveTime = []
    times.forEach((el, idx, arr) => {
        el = el.split(" ~ ")
        arriveTime.push(el[0])
        leaveTime.push(el[1])
    })
    console.log(arriveTime)
    console.log(leaveTime)
    //1시간은 60분
    arriveTime = arriveTime.map(el => {
        el = el.split(":")
        el = (Number(el[0]) * 60) + Number(el[1])
        return el
    })
    leaveTime = leaveTime.map(el => {
        el = el.split(":")
        el = (Number(el[0]) * 60) + Number(el[1])
        return el
    })
    console.log(arriveTime)
    console.log(leaveTime)

    //도착시간은 떠나는 시간들보다 작아야 하고
    //떠나는시간은 도착 시간보다 커야 한다.

    Math.max.apply(null, arriveTime)
    Math.min.apply(null, leaveTime)
}
// 09:00 10:00 08:00
// 10:00 12:00 12:00


const time1 = ["12:00 ~ 23:59", "11:00 ~ 18:00", "14:00 ~ 20:00"]
socar(3, time1)
