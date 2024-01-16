const { add } = require("../../bites/biteCode/add");
const { multiply } = require("../../bites/biteCode/multiply");
const { fizzBuzz } = require("../../bites/biteCode/fizzBuzz");

describe("add", () => {
	it("adds 2 and 2", () => {
		expect(2 + 2).toBe(4);
		expect(add(2, 2)).toBe(4);
	});
	it("adds 5 and 41", () => {
		expect(add(5, 41)).toBe(46);
	});
});

describe("multiply", () => {
	it("multiplies 2 and 2", () => {
		expect(2 * 2).toBe(4);
		expect(multiply(2, 2)).toBe(4);
	});
	it("multiplies 5 and 41", () => {
		expect(multiply(5, 41)).toBe(205);
	});
});

describe("fizzBuzz", () => {
	it("fizz on multiple of 3", () => {
		expect(fizzBuzz(3)).toBe("Fizz");
		expect(fizzBuzz(303)).toBe("Fizz");
	});
	it("buzz on multiple of 5", () => {
		expect(fizzBuzz(5)).toBe("Buzz");
		expect(fizzBuzz(305)).toBe("Buzz");
	});
	it("fizzbuzz on multiple of 3 and 5", () => {
		expect(fizzBuzz(15)).toBe("FizzBuzz");
		expect(fizzBuzz(300)).toBe("FizzBuzz");
	});
	it("number returned on no multiple of 3 and 5", () => {
		expect(fizzBuzz(14)).toBe(14);
		expect(fizzBuzz(299)).toBe(299);
	});
	it("acceptance criteria", () => {
		expect(fizzBuzz(3)).toBe("Fizz");
		expect(fizzBuzz(5)).toBe("Buzz");
		expect(fizzBuzz(8)).toBe(8);
		expect(fizzBuzz(15)).toBe("FizzBuzz");
		expect(fizzBuzz(18)).toBe("Fizz");
		expect(fizzBuzz(20)).toBe("Buzz");
	});
});
