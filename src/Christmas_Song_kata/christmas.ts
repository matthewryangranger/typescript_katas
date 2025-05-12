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
    }
}