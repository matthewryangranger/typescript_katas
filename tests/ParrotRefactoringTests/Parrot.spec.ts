/* Specification file: Refactored code must pass these provided tests */
import {EuropeanParrot, AfricanParrot, NorwegianBlueParrot} from "../../src/ParrotRefactoring/Parrot";

describe('ParrotInterface', () => {

    it('gets speed of European Parrot', () => {
        const parrot = new EuropeanParrot();
        expect(parrot.getSpeed()).toBe(12);
    });

    it('gets speed of African Parrot with one coconut', () => {
        const parrot = new AfricanParrot(1);
        expect(parrot.getSpeed()).toBe(3);
    });

    it('gets speed of African Parrot with two coconuts', () => {
        const parrot = new AfricanParrot(2);
        expect(parrot.getSpeed()).toBe(0);
    });

    it('gets speed of African Parrot with no coconuts', () => {
        const parrot = new AfricanParrot();
        expect(parrot.getSpeed()).toBe(12);
    });

    it('gets speed of Norwegian Blue Parrot nailed', () => {
        const parrot = new NorwegianBlueParrot(true);
        expect(parrot.getSpeed()).toBe(0);
    });

    it('gets speed of Norwegian Blue Parrot not nailed and 1.5 voltage', () => {
        const parrot = new NorwegianBlueParrot(false, 1.5);
        expect(parrot.getSpeed()).toBe(18);
    });

    it('gets speed of Norwegian Blue Parrot not nailed with 4 volts', () => {
        const parrot = new NorwegianBlueParrot(false, 4);
        expect(parrot.getSpeed()).toBe(24);
    });

    it('gets cry of European Parrot', () => {
        const parrot = new EuropeanParrot();
        expect( parrot.getCry()).toBe("Sqoork!");
    });

    it('gets cry of African Parrot', () => {
        const parrot = new AfricanParrot();
        expect( parrot.getCry()).toBe("Sqaark!");
    });
    it('gets cry of Norwegian Blue with high voltage', () => {
        const parrot = new NorwegianBlueParrot( false, 4);
        expect( parrot.getCry()).toBe("Bzzzzzz");
    });

    it('gets cry of NorwegianBlue without voltage and not nailed', () => {
        const parrot = new NorwegianBlueParrot();
        expect(parrot.getCry()).toBe("...");
    });

});