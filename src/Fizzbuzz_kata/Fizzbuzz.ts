export class Fizzbuzz {
    public convert(num: number): string {
        if (num % 15 === 0) {
            return "FizzBuzz";
        }
        if (num % 3 === 0) {
            return "Fizz";
        }
        if (num % 5 === 0) {
            return "Buzz";
        }
        if (num % 7 === 0) {
            return "Whizz";
        }
        if (num % 11 === 0) {
            return "Bang";
        }
        return num.toString();
    }
}