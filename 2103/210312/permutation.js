const population = "ABCDE"
function permutation(population, pickNum) {
    const result = []

    const aux = str => {
        // base case
        if (str.length === pickNum) {
            result.push(str)
            return
        }

        // recursive case
        for (let idx = 0; idx < population.length; idx++) {
            //"".indexOf(a b c d e) = aux(a) aux(b) aux(c) aux(d) aux(e)
            //a.indexOf(a b c d e) = aux(ab) aux(ac) aux(ad) aux(ae)
            //ab.indexOf(a b c d e) = aux(abc) aux(abd) aux(abe)
            //... "" 
            if (str.indexOf(population[idx] === -1)) {
                console.log(population[idx])
                aux(str + population[idx])
            }

        }
    }

    aux("")
    console.log(result)
}

permutation(population, 3)
