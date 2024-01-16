class User {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
	getIntroduction() {
		return `Hi, my name is ${this.name}`;
	}
}

class UserBase {
	constructor(nameArr) {
		this.users = nameArr;
	}
	getNames() {
		return this.users.map((user) => {
			return user.getName();
		});
	}
	getIntroductions() {
		return this.users.map((user) => {
			return user.getIntroduction();
		});
	}
	count() {
		return this.users.length;
	}
}

class Candy {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	getName() {
		return this.name;
	}
	getPrice() {
		return this.price;
	}
}
class ShoppingBasket {
	constructor() {
		this.items = [];
	}
	addItem(candy) {
		this.items.push(candy);
	}
	getTotalPrice() {
		let total = 0;
		this.items.forEach((item) => (total += item.price));
		return total;
	}
}

module.exports = { User, UserBase, Candy, ShoppingBasket };
