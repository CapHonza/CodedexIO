const dnaPieces = ["A", "C", "G", "T"];

let myDNA = [];

for (let i = 0; i < 24; i++) {
    let index1 = Math.floor(Math.random() * 4);
    let index2 = Math.floor(Math.random() * 4);
    let index3 = Math.floor(Math.random() * 4);

    index1 = dnaPieces[index1];
    index2 = dnaPieces[index2];
    index3 = dnaPieces[index3];

    myDNA.unshift(index1 + index2 + index3);
}

console.log(myDNA);