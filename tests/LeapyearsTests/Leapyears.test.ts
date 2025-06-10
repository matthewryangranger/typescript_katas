import {Leapyears} from "../../src/Leapyears/Leapyears";

describe("Leapyears", () => {

    const unit = new Leapyears();

    it("should return false for typical common year", () => {
        expect(unit.revealIfLeapYear(2001)).toBe(false);
        expect(unit.revealIfLeapYear(2025)).toBe(false);
    });

    it("should return true for typical leap year", () => {
        expect(unit.revealIfLeapYear(2004)).toBe(true);
        expect(unit.revealIfLeapYear(1996)).toBe(true);
    });

    it("should return false for an atypical common year", () => {
        expect(unit.revealIfLeapYear(1900)).toBe(false);
        expect(unit.revealIfLeapYear(1700)).toBe(false);
    });

    it("should return true for an atypical leap year", () => {
        expect(unit.revealIfLeapYear(2000)).toBe(true);
        expect(unit.revealIfLeapYear(2400)).toBe(true);
    });

})