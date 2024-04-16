const express = require('express')
const app = express()
const db = require('./models');
const member = require('./models/member');
const { Member } = db;

app.use(express.json()) // using middleware: json 데이터를 추출하여 response의 body에 할당
app.use((request, response, next) => {
  console.log(Object.keys(request.query))
  next();
})
 
// let members = require('./members.js')

app.get('/api/members', async (request, response) => {
  const {team} = request.query
  if (team){
    const teamMembers = await Member.findAll({where: {team}, order: [['admissionDate', 'DESC'],  ['name', 'ASC']]})
    response.send(`<h1>${team} team's member list</h1>${JSON.stringify(teamMembers)}`)
  }
  else if (Object.keys(request.query).length === 0){
    console.log('hello')
    const members = await Member.findAll({order: [['admissionDate', 'DESC'], ['name', 'ASC']]})
    response.send(`<h1>Our member list</h1>${JSON.stringify(members)}`)
  }
  else{
    response.status(404).send({message: "Unexpected Query"})
  }
})
app.get('/api/members/:id', async (request, response) => {
  const {id} = request.params
  const member = await Member.findOne({where: {id}})
  if (member){
    response.send(`<h1>The ${id}th member's info</h1><h2>${JSON.stringify(member)}</h2>`)
  }
  else{ // undefined
    response.status(404).send({message: "ID Not Found"})
  }
})
app.get('*', (request, response) => {response.send('<h1>Page Not Found<h1>')})

app.post('/api/members', async (request, response) => {
  const {id} = request.body
  let member
  if (id){
    member = await Member.findOne({where: {id}})
  }
  if (member){
    response.status(405).send({message: 'ID Dupplication Not Allowed'})
  }
  else{
    const newMember = Member.build(request.body)
    await newMember.save()
    response.send(`<h1>${newMember.id}th member has arrived</h1><h2>${JSON.stringify(request.body)}</h2>`)
  }
})

app.put('/api/members/:id', async (request, response) => {
  const {id} = request.params
  const info = request.body
  const result = await Member.update(info, {where: {id}})
  /*
  const member = await Member.findOne({where: {id}})
  if (member){
    Object.keys(info).forEach(property => {member[property] =  info[property]})
    await member.save()
    response.send(`<h1>The ${id}th member's info is changed</h1><h2>${JSON.stringify(member)}</h2>`)
  }
  */
  if (result[0]){
    response.send(`<h1>The ${id}th member's info is changed</h1>`)
  }
  else{
    response.status(404).send({message: "ID Not Found"})
  }
})

app.delete('/api/members/:id', (requset, response) => {
  const {id} = requset.params
  deleteCount = Member.destroy({where:{id}})
  if (deleteCount){
    response.send(`<h1>Delete ${id}th member</h1>`)
  }
  /*
  const originLength = members.length
  members = members.filter(m => m.id !== Number(id))
  if (originLength > members.length){
    response.send(`<h1>Delete ${id}th member</h1>`)
  }
  */
 /*
 const member = await Member.findOne({ where: { id } });
 if (member) {
    const result = await member.destroy();
    res.send({ message: `1 row(s) deleted` });
 */
  else{
    response.status(404).send({message: "ID Not Found"})
  }
})

app.listen(process.env.PORT || 3000, () => {console.log('Server is prepared')})