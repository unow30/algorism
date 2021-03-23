function socar(num, times) {
    let arriveTime = []
    let leaveTime = []
    times.forEach((el, idx, arr) => {
        el = el.split(" ~ ")
        arriveTime.push(el[0])
        leaveTime.push(el[1])
    })
    //console.log(arriveTime)
    //console.log(leaveTime)
    //1시간 60분
    arriveTime = arriveTime.map(el => {
        el = el.split(":")
        el = el[0] * 60 + el[1]
        return el
    })
    leaveTime = leaveTime.map(el => {
        el = el.split(":")
        el = el[0] * 60 + el[1]
        return el
    })
    //console.log(arriveTime)
    //console.log(leaveTime)
}


const time1 = ["12:00 ~ 23:59", "11:00 ~ 18:00", "14:00 ~ 20:00"]
socar(3, time1)
