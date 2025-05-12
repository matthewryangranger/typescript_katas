import {christmas} from "../../src/Christmas_Song_kata/christmas";

describe('christmas song function', () => {
    it('should print to the console the fiirst day stanza', () => {
        const logSpy = jest.spyOn(console, 'log');
        christmas(1);
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(3);
        expect(logSpy).toHaveBeenCalledWith("On the first day of Christmas");
        expect(logSpy.mock.calls).toContainEqual(["My true love sent to me:"]);
        expect(logSpy.mock.calls).toContainEqual(["A partridge in a pear tree."]);
        logSpy.mockRestore();
    });

    it('should print to the console the second day stanza', () => {
        const logSpy = jest.spyOn(console, 'log');
        christmas(2);
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(4);
        expect(logSpy).toHaveBeenCalledWith("On the second day of Christmas");
        expect(logSpy.mock.calls).toContainEqual(["My true love sent to me:"]);
        expect(logSpy.mock.calls).toContainEqual(["Two turtle doves and"]);
        expect(logSpy.mock.calls).toContainEqual(["A partridge in a pear tree."]);
        logSpy.mockRestore();
    });

    it('should print to the console the third day stanza', () => {
        const logSpy = jest.spyOn(console, 'log');
        christmas(3);
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(5);
        expect(logSpy).toHaveBeenCalledWith("On the third day of Christmas");
        expect(logSpy.mock.calls).toContainEqual(["My true love sent to me:"]);
        expect(logSpy.mock.calls).toContainEqual(["Three french hens"]);
        expect(logSpy.mock.calls).toContainEqual(["Two turtle doves and"]);
        expect(logSpy.mock.calls).toContainEqual(["A partridge in a pear tree."]);
        logSpy.mockRestore();
    });

    it('should print to the console the fourth day stanza', () => {
        const logSpy = jest.spyOn(console, 'log');
        christmas(4);
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(6);
        expect(logSpy).toHaveBeenCalledWith("On the fourth day of Christmas");
        expect(logSpy.mock.calls).toContainEqual(["My true love sent to me:"]);
        expect(logSpy.mock.calls).toContainEqual(["Four calling birds"]);
        expect(logSpy.mock.calls).toContainEqual(["Three french hens"]);
        expect(logSpy.mock.calls).toContainEqual(["Two turtle doves and"]);
        expect(logSpy.mock.calls).toContainEqual(["A partridge in a pear tree."]);
        logSpy.mockRestore();
    });
});