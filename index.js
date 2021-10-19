const age = prompt(`What old are you?`);
const distance = prompt(`How far are you travelling today in km?`)
const unitPrice = 0.21;
const under18Discount = 0.2;
const over65Discount = 0.4;

let ticketCost = 0

if (age < 18) {
    ticketCost = distance*(unitPrice-(unitPrice*under18Discount))
} else if (age > 65) {
    ticketCost = distance*(unitPrice-(unitPrice*over65Discount))
} else {
    ticketCost = distance*0.21
};

ticketCost = ticketCost.toFixed(2)

alert(`You fare will cost you £`+ticketCost);