import {Fizzbuzz} from "../../src/Fizzbuzz_kata/Fizzbuzz";

describe("Fizzbuzz", () => {

    const unit = new Fizzbuzz();

    it("should convert a number one to string one", () => {
        expect(unit.convert(1)).toBe("1");
    })
})