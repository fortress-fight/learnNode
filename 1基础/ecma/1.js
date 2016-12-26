var a = 100;
console.log(a)
// 100

var b = new Date();
console.log(b)
//Mon Dec 26 2016 01:49:53 GMT+0800 (中国标准时间)

var c = [1,2,3,4]
c.push(5);
console.log(c)
// [ 1, 2, 3, 4, 5 ]

function Person (name) {
	this.name = name
}
Person.prototype.say = function(){
	console.log(this.name)
};

var p1 = new Person('person');
p1.say();
// person