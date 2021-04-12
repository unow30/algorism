let divCounter = (num) => {
    let i = 0;
    let iNum = num;
    while (iNum > 0) {
        i++;
        iNum = iNum / 3;
    }
    return i;
}
let maxCase = 500000000;
console.log(divCounter(maxCase))