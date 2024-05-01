/*
a = {
  first: [1, 2, 3],
  second: 12
}

let b = Object.assign({}, a)

a.first.push(13)
a.second =  14
console.log('\'result\': '+b.first+' / '+b.second)

function n(a){
  return a
}

function m(){
  return a
}

console.log(n('hi'))
console.log(m())


class A{
  constructor(al){
    this.alice = al
  }
  set alice(value){
    this.valice = value
    console.log('change')
  }
}

const a = new A('h')
console.log(a.alice, a.valice)
a.alice = 1
console.log(a.alice, a.valice)
a._alice = 2
console.log(a.alice, a.valice)

function syncDelay(milliseconds){
  var start = new Date().getTime();
  var end=0;
  while( (end-start) < milliseconds){
      end = new Date().getTime();
  }
 }
 
 
 async function test3() {
   const result = await Promise.resolve('success1');
   console.log(result);
 }
 
 
 async function test2() {
   try {
     const p = new Promise((resolve, reject) => {
       setTimeout(() => { resolve('last'); }, 0); // pending에서 fulfilled로 전환해야 해 가장 마지막에 출력된다.
     });
     const result = await p;
     console.log(result);
   } catch (e) {
     console.log(e);
   }
 }
 
 
 async function test1() {
     const result = await Promise.resolve('success2');
     console.log(result);
 }
 
 test1();
 test2();
 test3();

 ---

 function add(a, b) {
  return a + b;
}

console.log('exports ------------------------->');
console.dir(exports);
console.log('require ------------------------->');
console.dir(require.main.exports);
console.log('module ------------------------->');
console.dir(module.exports);


exports.plus = add; // add 함수를 plus라는 이름으로 공개

console.log('exports ------------------------->');
console.dir(exports);
console.log('require ------------------------->');
console.dir(require.main.exports);
console.log('module ------------------------->');
console.dir(module.exports);

exports = {} -> 주소 변경

console.log('exports ------------------------->');
console.dir(exports);
console.log('require ------------------------->');
console.dir(require.main.exports);
console.log('module ------------------------->');
console.dir(module.exports);

module.exports = {'hel':'lo'} -> 주소 변경

console.log('exports ------------------------->');
console.dir(exports);
console.log('require ------------------------->');
console.dir(require.main.exports);
console.log('module ------------------------->');
console.dir(module.exports);

/* result: 
exports ------------------------->
{}
require ------------------------->
{ hel: 'lo' }
module ------------------------->
{ hel: 'lo' }
*/
