
function randomGenerator(min: number, max: number) {
    const rng = Math.random();
    return Math.trunc(rng * (max - min) + min);
}

// for (let i = 0; i < 10; i++){
//     console.log(randomGenerator(1,100));
// }


//Genera Random Number con decimali e senza.
function RNGDec(min: number, max: number, precision: number) {
    const multFactor = Math.pow(10, precision);
    return randomGenerator(min * multFactor, max *multFactor) / multFactor;
}

function RNGSequence(min: number, max: number, len: number) {
    if (len >= max - min) {
        throw new Error(`ERRORE, I NUMERI SONO MAGGIORI DELLA LUNGHEZZA`);
    }else if (len < 0) {
        throw new Error(`ERRORE LA LUNGHEZZA NON E' UN NUMERO POSITIVO`);
    }else if (!Number.isInteger(len)){
        throw new Error(`ERRORE IL NUMERO NON E' UN INTERO`);
    }
    const res: number[] = [];
    while (res.length < len) {
        const rn = randomGenerator(min, max);
        if (res.includes(rn)){ 
            continue;
        }
        res.push(rn);
    }
    return res;
}

const route = ['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano', 
'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia', 'Nazionale'];


const estrazioni: {[ruota: string]: number[]} = {};

for (const ruota of route) {
    const estrazione = RNGSequence(1,100,5)
    estrazioni[ruota] = estrazione
    
}

console.log(JSON.stringify(estrazioni, null, 2))