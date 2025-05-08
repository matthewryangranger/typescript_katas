export class Fizzbuzz {
    public convert(num: number): string {
        let result = "";
        if (num % 3 === 0) {
            result += "Fizz";
        }
        if (num % 5 === 0) {
            result += "Buzz";
        }
        if (num % 7 === 0) {
            result += "Whizz";
        }
        if (num % 11 === 0) {
            result += "Bang";
        }
        return result ? result : num.toString();
    }
}