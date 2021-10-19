const age = prompt(`What old are you?`);
/*const distance = prompt(`How far are you travelling today in km?`); ONLY APPLIES TO ORIGINAL EXERCISE*/
const destination = prompt('Choose a destination 1  2  3 or 4');
const unitPrice = 0.21;
const under18Discount = 0.2;
const over65Discount = 0.4;

let ticketCost = 0
let distance = 0;

if (destination == 1) {
    distance = 100
} else if (destination == 2) {
    distance = 200
} else if (destination == 3) {
    distance = 300
} else if (destination == 4) {
    distance = 400
};

if (age < 18) {
    ticketCost = distance*(unitPrice-(unitPrice*under18Discount))
} else if (age > 65) {18
    ticketCost = distance*(unitPrice-(unitPrice*over65Discount))
} else {
    ticketCost = distance*0.21
};

ticketCost = ticketCost.toFixed(2)

alert(`You fare will cost you £`+ticketCost);