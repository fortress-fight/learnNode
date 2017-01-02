var num = 100;
console.log(num); // 100
var date = new Date();
console.log(date); // 2017-01-01T05:14:37.916Z
var arr = [1,2,3,4,5,6];
arr.push('add')
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 'add' ]

function CreatePerson(name) {
    this.name = name;
}
CreatePerson.prototype.sayName = function () {
    console.log(this.name);
};
var person1 = new CreatePerson('xiaobai');
person1.sayName(); // xiaobai
