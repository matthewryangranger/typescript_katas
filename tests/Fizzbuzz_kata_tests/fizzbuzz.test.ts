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

    it("should convert a multiple of three to Fizz", () => {
        expect(unit.convert(6)).toBe("Fizz");
    });

    it("should convert a multiple of five to Buzz", () => {
        expect(unit.convert(10)).toBe("Buzz");
    });


})