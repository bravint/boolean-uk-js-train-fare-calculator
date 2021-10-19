const age = prompt(`What old are you?`);
const distance = prompt(`How far are you travelling today in km?`)

let ticketCost = 0

if (age < 18) {
    ticketCost = distance*(0.21-(0.21*0.2))
} else if (age < 65) {
    ticketCost = distance*(0.21-(0.21*0.4))
} else {
    ticketCost = distance*0.21
};

alert(`You fare will cost you £`+ticketCost);