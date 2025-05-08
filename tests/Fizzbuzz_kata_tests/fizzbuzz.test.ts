import {Fizzbuzz} from "../../src/Fizzbuzz_kata/Fizzbuzz";

describe("Fizzbuzz", () => {

    const unit = new Fizzbuzz();

    it("should return unaltered string numerals for non-multiples of three, five, seven, eleven", () => {
        expect(unit.convert(1)).toBe("1");
        expect(unit.convert(4)).toBe("4");
        expect(unit.convert(82)).toBe("82");
    });

    it("should convert any multiple of three to contain the string Fizz", () => {
        expect(unit.convert(3)).toBe("Fizz");
        expect(unit.convert(3)).toBe("Fizz");
        expect(unit.convert(15)).toBe("FizzBuzz");
    });

    it("should convert any multiple of five to contain the string Buzz", () => {
        expect(unit.convert(5)).toBe("Buzz");
        expect(unit.convert(15)).toBe("FizzBuzz");
        expect(unit.convert(35)).toBe("BuzzWhizz");
    });

    it("should convert any multiple of seven to contain the string Whizz", () => {
        expect(unit.convert(35)).toBe("BuzzWhizz");
        expect(unit.convert(77)).toBe("WhizzBang");
    });

    it("should convert any multiple of eleven to contain the string Bang", () => {
        expect(unit.convert(77)).toBe("WhizzBang");
        expect(unit.convert(385)).toBe("BuzzWhizzBang");
        expect(unit.convert(1155)).toBe("FizzBuzzWhizzBang");
    });

})