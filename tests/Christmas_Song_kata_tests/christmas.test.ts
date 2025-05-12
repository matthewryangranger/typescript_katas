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

    it('should print to the console the fifth day stanza', () => {
        const logSpy = jest.spyOn(console, 'log');
        christmas(5);
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(7);
        expect(logSpy).toHaveBeenCalledWith("On the fifth day of Christmas");
        expect(logSpy.mock.calls).toContainEqual(["My true love sent to me:"]);
        expect(logSpy.mock.calls).toContainEqual(["Five golden rings"]);
        expect(logSpy.mock.calls).toContainEqual(["Four calling birds"]);
        expect(logSpy.mock.calls).toContainEqual(["Three french hens"]);
        expect(logSpy.mock.calls).toContainEqual(["Two turtle doves and"]);
        expect(logSpy.mock.calls).toContainEqual(["A partridge in a pear tree."]);
        logSpy.mockRestore();
    });

    it('should print to the console the sixth day stanza', () => {
        const logSpy = jest.spyOn(console, 'log');
        christmas(6);
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(8);
        expect(logSpy).toHaveBeenCalledWith("On the sixth day of Christmas");
        expect(logSpy.mock.calls).toContainEqual(["My true love sent to me:"]);
        expect(logSpy.mock.calls).toContainEqual(["Six geese a-laying"]);
        expect(logSpy.mock.calls).toContainEqual(["Five golden rings"]);
        expect(logSpy.mock.calls).toContainEqual(["Four calling birds"]);
        expect(logSpy.mock.calls).toContainEqual(["Three french hens"]);
        expect(logSpy.mock.calls).toContainEqual(["Two turtle doves and"]);
        expect(logSpy.mock.calls).toContainEqual(["A partridge in a pear tree."]);
        logSpy.mockRestore();
    });

    it('should print to the console the seventh day stanza', () => {
        const logSpy = jest.spyOn(console, 'log');
        christmas(7);
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(9);
        expect(logSpy).toHaveBeenCalledWith("On the seventh day of Christmas");
        expect(logSpy.mock.calls).toContainEqual(["My true love sent to me:"]);
        expect(logSpy.mock.calls).toContainEqual(["Seven swans a-swimming"]);
        expect(logSpy.mock.calls).toContainEqual(["Six geese a-laying"]);
        expect(logSpy.mock.calls).toContainEqual(["Five golden rings"]);
        expect(logSpy.mock.calls).toContainEqual(["Four calling birds"]);
        expect(logSpy.mock.calls).toContainEqual(["Three french hens"]);
        expect(logSpy.mock.calls).toContainEqual(["Two turtle doves and"]);
        expect(logSpy.mock.calls).toContainEqual(["A partridge in a pear tree."]);
        logSpy.mockRestore();
    });

    it('should print to the console the eighth day stanza', () => {
        const logSpy = jest.spyOn(console, 'log');
        christmas(8);
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(10);
        expect(logSpy).toHaveBeenCalledWith("On the eighth day of Christmas");
        expect(logSpy.mock.calls).toContainEqual(["My true love sent to me:"]);
        expect(logSpy.mock.calls).toContainEqual(["Eight maids a-milking"]);
        expect(logSpy.mock.calls).toContainEqual(["Seven swans a-swimming"]);
        expect(logSpy.mock.calls).toContainEqual(["Six geese a-laying"]);
        expect(logSpy.mock.calls).toContainEqual(["Five golden rings"]);
        expect(logSpy.mock.calls).toContainEqual(["Four calling birds"]);
        expect(logSpy.mock.calls).toContainEqual(["Three french hens"]);
        expect(logSpy.mock.calls).toContainEqual(["Two turtle doves and"]);
        expect(logSpy.mock.calls).toContainEqual(["A partridge in a pear tree."]);
        logSpy.mockRestore();
    });

    it('should print to the console the ninth day stanza', () => {
        const logSpy = jest.spyOn(console, 'log');
        christmas(9);
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(11);
        expect(logSpy).toHaveBeenCalledWith("On the ninth day of Christmas");
        expect(logSpy.mock.calls).toContainEqual(["My true love sent to me:"]);
        expect(logSpy.mock.calls).toContainEqual(["Nine ladies dancing"]);
        expect(logSpy.mock.calls).toContainEqual(["Eight maids a-milking"]);
        expect(logSpy.mock.calls).toContainEqual(["Seven swans a-swimming"]);
        expect(logSpy.mock.calls).toContainEqual(["Six geese a-laying"]);
        expect(logSpy.mock.calls).toContainEqual(["Five golden rings"]);
        expect(logSpy.mock.calls).toContainEqual(["Four calling birds"]);
        expect(logSpy.mock.calls).toContainEqual(["Three french hens"]);
        expect(logSpy.mock.calls).toContainEqual(["Two turtle doves and"]);
        expect(logSpy.mock.calls).toContainEqual(["A partridge in a pear tree."]);
        logSpy.mockRestore();
    });

    it('should print to the console the tenth day stanza', () => {
        const logSpy = jest.spyOn(console, 'log');
        christmas(10);
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledTimes(12);
        expect(logSpy).toHaveBeenCalledWith("On the tenth day of Christmas");
        expect(logSpy.mock.calls).toContainEqual(["My true love sent to me:"]);
        expect(logSpy.mock.calls).toContainEqual(["Ten lords a-leaping"]);
        expect(logSpy.mock.calls).toContainEqual(["Nine ladies dancing"]);
        expect(logSpy.mock.calls).toContainEqual(["Eight maids a-milking"]);
        expect(logSpy.mock.calls).toContainEqual(["Seven swans a-swimming"]);
        expect(logSpy.mock.calls).toContainEqual(["Six geese a-laying"]);
        expect(logSpy.mock.calls).toContainEqual(["Five golden rings"]);
        expect(logSpy.mock.calls).toContainEqual(["Four calling birds"]);
        expect(logSpy.mock.calls).toContainEqual(["Three french hens"]);
        expect(logSpy.mock.calls).toContainEqual(["Two turtle doves and"]);
        expect(logSpy.mock.calls).toContainEqual(["A partridge in a pear tree."]);
        logSpy.mockRestore();
    });
});