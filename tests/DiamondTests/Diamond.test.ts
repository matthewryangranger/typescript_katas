import {Diamond} from "../../src/Diamond/Diamond";

describe("Diamond", () => {

    const unit = new Diamond();

    it("should print a diamond starting with A, pass in A", () => {
        expect(unit.print(1));
    });
});