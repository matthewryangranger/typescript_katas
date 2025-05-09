import {christmas} from "../../src/Christmas_Song_kata/christmas";

describe('christmas song function', () => {
    it('should print to the console the fiirst day stanza', () => {
        const logSpy = jest.spyOn(console, 'log');
        christmas();
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(3);
        expect(logSpy).toHaveBeenCalledWith("On the first day of Christmas");
        expect(logSpy.mock.calls).toContainEqual(["My true love sent to me:"]);
        expect(logSpy.mock.calls).toContainEqual(["A partridge in a pear tree."]);
        logSpy.mockRestore();
    });

    // it('should print to the console the fiirst day stanza', () => {
    //     const logSpy = jest.spyOn(console, 'log');
    //     christmas();
    //     expect(logSpy).toHaveBeenCalled();
    //     expect(logSpy).toHaveBeenCalledTimes(3);
    //     expect(logSpy).toHaveBeenCalledWith("On the first day of Christmas");
    //     expect(logSpy.mock.calls).toContainEqual(["My true love sent to me:"]);
    //     expect(logSpy.mock.calls).toContainEqual(["A partridge in a pear tree."]);
    //     logSpy.mockRestore();
    // });
});