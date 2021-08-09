// Write your tests here!
const {caesar} = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesarModule", () => {
    it("should encode a word with a forward shift", () => {
        const expected = "wklqnixo";
        const actual = caesar("thinkful", 3)
        expect(actual).to.equal(expected);
    })
    it("should encode a word with a backward shift", () => {
        const expected = 'qefkhcri';
        const actual = caesar("thinkful", -3);
        expect(actual).to.equal(expected);
    })
    it("should be able to decode a coded word", () => {
        const expected = 'thinkful';
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.equal(expected);
    })
    it("should be able to encode a sentence that includes punctuation, special characters, and spaces", () => {
        const expected = 'bpqa qa i amkzmb umaaiom!'
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    })
    it("should be able to decode a sentence that includes punctuation, special characters, and spaces", () => {
        const expected = 'this is a secret message!';
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected);
    })
    it("should return false if no shift is given", () => {
        const expected = false;
        const actual = caesar("thinkful");
        expect(actual).to.equal(expected);
    })
    it("should return false if shift is invalid (high)", () => {
        const expected = false;
        const actual = caesar("thinkful", 99);
        expect(actual).to.equal(expected);
    })
    it("should return false if shift is invalid (low)", () => {
        const expected = false;
        const actual = caesar("thinkful", -26);
        expect(actual).to.equal(expected);
    })
})