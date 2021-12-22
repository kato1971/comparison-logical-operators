// Part 1
const age = 18;

if (age >= 18) {
    console.log("Jes you are old enough, you can come in!");
}
else {
    console.log("Sorry you are to young, please stay out!");
}

//Part 2
const isFemale = "True";

if (isFemale == "True") {
    console.log("You are Female!");
}
else {
    console.log("you are Male!");
}

//Part 3
const driverStatus = "bob";

if (driverStatus == "bob") {
    console.log("You are the bob, you are allowed to drive!");
}
else {
    console.log("You drink alcohol, you are not allowed to drive!")
}

/* Comparison && Logical Operators
Part 1*/

if (age >= 18 && age <= 25) {
    console.log("You get 50% off!");
}
else {
    console.log("You have to pay the full prise!");
}

//Part 2
const firstName = "Nancy";

if (firstName == "Kato" || firstName == "Jan") {
    console.log("You get a free beer on this festive day!");
}
else {
    console.log("Sorry, no free beer on this festive day!");
}

//Part 3
const totalAmount = 125;

if (totalAmount >= 25 && totalAmount <= 50) {
    console.log("You get free (veggie) bitterballen!");
}
else if(totalAmount >= 50 && totalAmount <= 100) {
    console.log("You get a free portion of nachos!");
}
else {
    console.log("You get a free bottle of champagne!")
}