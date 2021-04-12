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