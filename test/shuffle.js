import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("Shuffle Function", () => {
    it("Should shuffles the indexes of an array", () => {
        const card = [10, 20, 30, 40, 50];
        expect(shuffle(card)).to.not.deep.equal(card);
    });
    it("Should return an array", () => {
        const card = [10, 20, 30, 40, 50];
        expect(Array.isArray(shuffle(card))).to.be.true;
    });
});
