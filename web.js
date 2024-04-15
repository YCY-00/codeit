users = ['Tom', 'John', 'Jane', 'Harry', 'Alice']

// const http = require('http')
// const server = http.createServer((request, response) => {
//   const urlArray = request.url.split('/')
//   if(request.url === '/'){
//     response.end('<h1>Hello! Welcome to the UserLand!</h1>')
//   }
//   else if(urlArray[urlArray.length - 2] === 'users'){
//     const userIdx = urlArray[urlArray.length - 1] - 1
//     const userName = users[userIdx]
//     response.end(`<h1>You are ${userName}</h1>`)
//   }
//   else{
//     response.end('<h1>Page Not Available</h1>')
//   }
// })
// server.listen(3000)

const express = require('express')
const app = express()

app.get('/', (request, response) => {response.end('<h1>Hello! Welcome to the UserLand!</h1>')})
app.get('/users/:id', (request, response) => {
  userId = request.params.id - 1
  if(userId < users.length){
    const userName = users[userId]
    response.end(`<h1>You are ${userName}</h1>`)
  }
  else{
    response.end(`<h1>Page Not Available</h1>`)
  }
})
app.get('/', (request, response) => {response.end('<h1>Page Not Available</h1>')})

app.listen(3000)