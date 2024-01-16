const { ShoppingBasket } = require("../../bites/biteCode/classes");

describe("testing shoppingbasket class", () => {
	it("check totalprice works and starts at 0", () => {
		const basket = new ShoppingBasket();
		let received = basket.getTotalPrice();
		let expected = 0;
		expect(received).toEqual(expected);
	});
	it("check addItem adds an item", () => {
		const basket = new ShoppingBasket();
		basket.addItem("it doesn't matter");
		let received = basket.items;
		let expected = ["it doesn't matter"];
		expect(received).toEqual(expected);
	});
	it("check addItem adds an item", () => {
		const basket = new ShoppingBasket();
		const notCandy1 = { name: "roman god of war", price: 8 };
		basket.addItem(notCandy1);
		let received = basket.getTotalPrice();
		let expected = 8;
		expect(received).toEqual(expected);

		const notCandy2 = { name: "ship hosting famous mutiny", price: 2 };
		basket.addItem(notCandy2);
		received = basket.getTotalPrice();
		expected = 2 + 8;
		expect(received).toEqual(expected);
		expect(basket.items).toEqual([notCandy1, notCandy2]);
	});
});
