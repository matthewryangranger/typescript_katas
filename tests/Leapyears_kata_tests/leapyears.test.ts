import {Leapyears} from "../../src/Leapyears_kata/Leapyears";

describe("Leapyears", () => {

    const unit = new Leapyears();

    it("should return false for typical common year", () => {
        expect(unit.revealIfLeapYear(1)).toBe(false);
    });

})