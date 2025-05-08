import {Fizzbuzz} from "../../src/Fizzbuzz_kata/Fizzbuzz";

describe("Fizzbuzz", () => {

    const unit = new Fizzbuzz();

    it("should convert a number one to string one", () => {
        expect(unit.convert(1)).toBe("1");
    });

    it("should convert a number two to string two", () => {
        expect(unit.convert(2)).toBe("2");
    });

    it("should convert a number three to string Fizz", () => {
        expect(unit.convert(3)).toBe("Fizz");
    });

    it("should convert a number five to string Buzz", () => {
        expect(unit.convert(5)).toBe("Buzz");
    });

    it("should convert a number seven to string Whizz", () => {
        expect(unit.convert(7)).toBe("Whizz");
    });

    it("should convert a number eleven to string Bang", () => {
        expect(unit.convert(11)).toBe("Bang");
    });

    it("should convert a multiple of three to string Fizz", () => {
        expect(unit.convert(6)).toBe("Fizz");
    });

    it("should convert a multiple of five to string Buzz", () => {
        expect(unit.convert(10)).toBe("Buzz");
    });

    it("should convert a multiple of seven to string Whizz", () => {
        expect(unit.convert(49)).toBe("Whizz");
    });

    it("should convert a multiple of eleven to string Bang", () => {
        expect(unit.convert(22)).toBe("Bang");
    });

    it("should convert a multiple of three and five to string FizzBuzz", () => {
        expect(unit.convert(15)).toBe("FizzBuzz");
    });

    it("should convert a multiple of three and seven to string FizzWhizz", () => {
        expect(unit.convert(21)).toBe("FizzWhizz");
    });

    it("should convert a multiple of three and eleven to string FizzWhizz", () => {
        expect(unit.convert(33)).toBe("FizzBang");
    });

    it("should convert a multiple of five and seven to string BuzzWhizz", () => {
        expect(unit.convert(35)).toBe("BuzzWhizz");
    });

    it("should convert a multiple of five and eleven to string BuzzBang", () => {
        expect(unit.convert(55)).toBe("BuzzBang");
    });

    it("should convert a multiple of seven and eleven to string WhizzBang", () => {
        expect(unit.convert(77)).toBe("WhizzBang");
    });


})