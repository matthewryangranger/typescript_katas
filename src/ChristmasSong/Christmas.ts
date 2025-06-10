function secondDay() {
    console.log("Two turtle doves and");
    firstDay();
}

export function firstDay() {
    console.log("A partridge in a pear tree.");
}

export function beginningLines(day: string) {
    console.log(`On the ${day} day of Christmas`);
    console.log("My true love sent to me:");
}

function thirdDay() {
    console.log("Three french hens");
    secondDay();
}

function fourthDay() {
    console.log("Four calling birds");
    thirdDay();
}

function fifthDay() {
    console.log("Five golden rings");
    fourthDay();
}

function sixthDay() {
    console.log("Six geese a-laying");
    fifthDay();
}

function seventhDay() {
    console.log("Seven swans a-swimming");
    sixthDay();
}

function eighthDay() {
    console.log("Eight maids a-milking");
    seventhDay();
}

function ninthDay() {
    console.log("Nine ladies dancing");
    eighthDay();
}

function tenthDay() {
    console.log("Ten lords a-leaping");
    ninthDay();
}

export function christmas(p0: number = 0): void {
    switch (p0) {
        case 1:
            beginningLines("first");
            firstDay();
            break;
        case 2:
            beginningLines("second");
            secondDay();
            break;
        case 3:
            beginningLines("third");
            thirdDay();
            break;
        case 4:
            beginningLines("fourth");
            fourthDay();
            break;
        case 5:
            beginningLines("fifth");
            fifthDay();
            break;
        case 6:
            beginningLines("sixth");
            sixthDay();
            break;
        case 7:
            beginningLines("seventh");
            seventhDay();
            break;
        case 8:
            beginningLines("eighth");
            eighthDay();
            break;
        case 9:
            beginningLines("ninth");
            ninthDay();
            break;
        case 10:
            beginningLines("tenth");
            tenthDay();
            break;
    }
}