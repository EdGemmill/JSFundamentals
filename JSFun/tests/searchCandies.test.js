const { searchCandies } = require("../code/searchCandies");

describe("searchCandies", () => {
	it("works with ma and 10", () => {
		expect(searchCandies("ma", 10)).toEqual(["Mars", "Maltesers"]);
	});
	it("works with ma and 2", () => {
		let received = searchCandies("Ma", 2);
		let expected = ["Mars"];
		expect(received).toEqual(expected);
	});
	it("works with s and 10", () => {
		let received = searchCandies("S", 10);
		let expected = ["Skitties", "Skittles", "Starburst"];
		expect(received).toEqual(expected);
	});
	it("works with s and 4", () => {
		let received = searchCandies("S", 4);
		let expected = ["Skitties", "Skittles"];
		expect(received).toEqual(expected);
	});
	it("works with upper and lowercase", () => {
		let received = searchCandies("s", 4);
		let expected = ["Skitties", "Skittles"];
		expect(received).toEqual(expected);

		received = searchCandies("sK", 4);
		expected = ["Skitties", "Skittles"];
		expect(received).toEqual(expected);

		received = searchCandies("Sk", 4);
		expected = ["Skitties", "Skittles"];
		expect(received).toEqual(expected);
	});
});
