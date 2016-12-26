var a = 100;
console.log(a) // 100
console.log(global.a) // undefined


global.a = 200;
console.log(global.a) // 200