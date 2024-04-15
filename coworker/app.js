const express = require('express')
const app = express()

app.use(express.json()) // using middleware: json 데이터를 추출하여 response의 body에 할당
app.use((request, response, next) => {
  console.log(request.query)
  next();
})

let members = require('./members.js')

app.get('/api/members', (request, response) => {
  const {team} = request.query
  if (team){
    const teamMembers = members.filter(m => m.team === team)
    response.send(`<h1>${team} team's member list</h1>${JSON.stringify(teamMembers)}`)
  }
  else{
    response.send(`<h1>Our member list</h1>${JSON.stringify(members)}`)
  }
})
app.get('/api/members/:id', (request, response) => {
  const {id} = request.params
  const member = members.find(m => m.id === Number(id))
  if (member){
    response.send(`<h1>The ${id}th member's info</h1><h2>${JSON.stringify(member)}</h2>`)
  }
  else{ // undefined
    response.status(404).send({message: "ID Not Found"})
  }
})
app.get('*', (request, response) => {response.send('<h1>Page Not Found<h1>')})

app.post('/api/members', (request, response) => {
  const {id} = request.body
  const member = members.find(m => m.id === Number(id))
  if (member){
    response.status(405).send({message: 'ID Dupplication Not Allowed'})
  }
  else{
    members.push(request.body)
    response.send(`<h1>${id}th member has arrived</h1><h2>${JSON.stringify(request.body)}</h2>`)
  }
})

app.put('/api/members/:id', (request, response) => {
  const {id} = request.params
  const info = request.body
  const member = members.find(m => m.id === Number(id))
  if (member){
    Object.keys(info).forEach(property => {member[property] =  info[property]})
    response.send(`<h1>The ${id}th member's info is changed</h1><h2>${JSON.stringify(member)}</h2>`)
  }
  else{
    response.status(404).send({message: "ID Not Found"})
  }
})

app.delete('/api/members/:id', (requset, response) => {
  const {id} = requset.params
  const originLength = members.length
  members = members.filter(m => m.id !== Number(id))
  if (originLength > members.length){
    response.send(`<h1>Delete ${id}th member</h1>`)
  }
  else{
    response.status(404).send({message: "ID Not Found"})
  }

})

app.listen(3000, () => {console.log('Server is prepared')})