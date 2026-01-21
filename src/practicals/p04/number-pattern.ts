// Write your code below
const p4 = Number(process.argv[2])
    for (let i= 1; i <= p4; i++) {
        let row = "";
        for (let j = 1; j <= p4 - i; j++) {
            row += " ";
        }
        for (let k = i; k >= 1; k--) {
            row += k;
        }
        console.log(row);
    }
