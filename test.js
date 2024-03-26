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