function checkLength(phoneNumber) {
	if (phoneNumber.length <= 10) {
		return true;
	}
}

function filterLongNumbers(numArray) {
	return numArray.filter(checkLength);
}

function createMessage(object) {
	return `Hi ${object["name"]}!, ${object["discount"]}% off our best candies for you today!`;
}

function generateMessages(nameArr) {
	return nameArr.map(createMessage);
}

const namesAndDiscounts = [
	{ name: "Anna", discount: 50 },
	{ name: "Laura", discount: 40 },
	{ name: "Josh", discount: 30 },
	{ name: "Min", discount: 50 },
	{ name: "Karla", discount: 60 },
];

module.exports = {
	checkLength,
	filterLongNumbers,
	createMessage,
	generateMessages,
	namesAndDiscounts,
};
