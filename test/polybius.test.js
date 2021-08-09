// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect;

describe("poybiusModule", () => {
    it("should return a string when encoding", () => {
        const expected = typeof "string";
        const actual = typeof(polybius("thinkful"));
        expect(actual).to.equal(expected);
    })
    it("should return the correct encoding of a word", () => {
        const expected = "4432423352125413";
        const actual = polybius("thinkful");
        expect(actual).to.equal(expected);
    })
    it("should return the correct decoding of a word with i or j", () => {
        const expected = "th(i/j)nkful";
        const actual = polybius("4432423352125413", false);
        expect(actual).to.equal(expected);
    })
    it("should return the correct decoding of a sentence", () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected)
    })
    it("should return false if the number of characters(excluding spaces) in the string is odd", () => {
        const expected = false;
        const actual = polybius("44324233521254134", false); //> false
        expect(actual).to.equal(expected);
    })
})