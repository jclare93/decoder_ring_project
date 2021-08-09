const {substitution} = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    it("should encode a word given an alphabet", () => {
        const expected = 'jrufscpw';
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    })
    it("should correctly encode a full sentence with spaces", () => {
        const expected = 'elp xhm xf mbymwwmfj dne'
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    })
    it("should correctly decode a word given an alphabet", () => {
        const expected = 'thinkful';
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); 
        expect(actual).to.equal(expected);
    })
    it("should correctly encode a word given an alphabet with special characters", () => {
        const expected = "y&ii$r&"
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal(expected);
    })
    it("should decode a string given an alphabet with special characters", () => {
        const expected = "message";
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
    })
    it("should return false if the alphabet given is not 26 characters", () => {
        const expected = false;
        const actual = substitution("thinkful", "short");
        expect(actual).to.equal(expected);
    })
    it("should return false if the alphabet characters are not all unique", () => {
        const expected = false;
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.equal(expected);
    })
})
