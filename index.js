const unitCost = 0.21;
const under18Discount = 0.2;
const over65Discount = 0.4;
let ticketCost = 0;
let distance = 0;

function ticket() {
    const age = document.getElementById("age").value;
    const destination = document.getElementById("destination").value;
    console.log (age);
    console.log (destination);

    if (destination === "A") {
        distance = 100
    } else if (destination === "B") {
        distance = 200
    } else if (destination === "C") {
        distance = 300
    } else if (destination === "D") {
        distance = 400
    };
    console.log (distance);

    if (age < 18) {
        ticketCost = distance*(unitCost-(unitCost*under18Discount))
    } else if (age > 65) {18
        ticketCost = distance*(unitCost-(unitCost*over65Discount))
    } else {
        ticketCost = distance*0.21
    };

    ticketCost = ticketCost.toFixed(2)
    alert(`You fare will cost you £`+ticketCost);
    console.log (ticketCost);
}