var expect = require('chai').expect

describe("example", async () => {
    it("passes test one", async () => {
        expect(42).to.eql(21 + 21)
    })
    it("passes test two", async () => {
        expect(99).to.eql(33 * 3)
    })
    it("passes test three", async () => {
        expect("hello").to.eql("he" + "llo")
    })
    it("passes test four", async () => {
        expect("world").to.eql("world" + "")
    })

    it("fails test five", async () => {
        expect(42).to.eql(42 + 1)
    })
    it("fails test six", async () => {
        expect(99).to.eql(99 - 1)
    })
    it("fails test seven", async () => {
        expect("hello").to.eql("world" + "")
    })
    it("fails test eight", async () => {
        expect("world").to.eql("he" + "llo")
    })

    it.skip("skips test nine", async () => {
        expect(42).to.eql(99)
    })
    it.skip("skips test ten", async () => {
        expect(72).to.eql(72)
    })
})
