export function christmas(p0: number = 0): void {
    if (p0 >= 1) {
        firstDay();
        beginningLines();
    }
}

export function firstDay(){
    console.log("A partridge in a pear tree.");
}

export function beginningLines(){
    console.log("On the first day of Christmas");
    console.log("My true love sent to me:");
}