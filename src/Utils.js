const createStepIterator = (debut = 0, fin = Infinity, pas = 1) => {
    let prochainIndex = debut;
    let nbIterations = 0;

    const rangeIterator = {
        next: function() {
            if (prochainIndex < fin) {
                let resultat = { value: prochainIndex, done: false };
                prochainIndex += pas;
                nbIterations++;
                return resultat;
            }
            return { value: nbIterations, done: true }
        }
    };
    return rangeIterator;
};


export function getIteratorWithStep (begin, end, step) {
    let dataDatesArray = [];

    let iterator = createStepIterator(begin,end,step);

    let resultat = iterator.next();

    while (!resultat.done) {
        console.log(resultat.value); // 1 3 5 7 9
        resultat = iterator.next();
        dataDatesArray.push(resultat.value);
    }

    console.log('dataDatesArray', dataDatesArray); // 1 3 5 7 9

    return dataDatesArray;
};