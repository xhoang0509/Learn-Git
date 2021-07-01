var chalk = require('chalk')
function Dog(name) {
	this.name = name;
	this.stomach = [];
}

Dog.prototype.eat = function (eat) {
	this.stomach.push(cat);
}

Dog.prototype.sayhi = function () {
	console.log('Hi! I am a dog. My name is '+ chalk.red(this.name));
};

module.exports = Dog;