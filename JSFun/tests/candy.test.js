const { Candy } = require("../../bites/biteCode/classes");

const candy = new Candy("Mars", 4.99);

describe("testing candy class", () => {
	it("getname works", () => {
		let received = candy.getName();
		let expected = "Mars";
		expect(received).toBe(expected);
	});
	it("getprice works", () => {
		let received = candy.getPrice();
		let expected = 4.99;
		expect(received).toBe(expected);
	});
});
