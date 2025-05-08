export class Fizzbuzz {
    public convert(num: number): string {
        if (num % 15 === 0) {
            return "FizzBuzz";
        }
        if (num % 21 === 0) {
            return "FizzWhizz";
        }
        if (num % 33 === 0) {
            return "FizzBang";
        }
        if (num % 35 === 0) {
            return "BuzzWhizz";
        }
        if (num % 55 === 0) {
            return "BuzzBang";
        }
        if (num % 77 === 0) {
            return "WhizzBang";
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