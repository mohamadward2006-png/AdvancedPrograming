const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
let persons = [
 { id: "1", name: "Ramez Mousa", number: "0992558725" },
 { id: "2", name: "Mouhammed Ward", number: "0923456789" },
 { id: "3", name:"Ahmad Halabi", number: "0934567890" }
]
app.get('/info', (req, res) => {
 res.send(`
<p/>جهات اتصال {persons.length}$ دليل الهاتف يحتوي على<p> 
 <p>${new Date()}</p>
 `)
})

app.get('/api/persons', (req, res) => {
 res.json(persons)
})
app.get('/api/persons/:id', (req, res) => {
 const person = persons.find(p => p.id === req.params.id)
 if (person) {
 res.json(person)
 } else {
 res.status(404).json({ error: 'موجودة غير االتصال جهة' })
 }
})
app.post('/api/persons', (req, res) => {
 const { name, number } = req.body
 if (!name || !number) {return res.status(400).json({ error: 'مطلوبان والرقم االسم' })
 }
 if (persons.find(p => p.name === name)) {
 return res.status(400).json({ error: 'اًمسبق موجود االسم' })
 }
 const person = {
 id: String(Math.floor(Math.random() * 1000000)),
 name, number
 }
 persons = persons.concat(person)
 res.status(201).json(person)
})

app.delete('/api/persons/:id', (req, res) => {
 persons = persons.filter(p => p.id !== req.params.id)
 res.status(204).end()
})
app.put('/api/persons/:id', (req, res) => {
 const { name, number } = req.body
 const id = req.params.id
 const person = { id, name, number }
 persons = persons.map(p => p.id !== id ? p : person)
 res.json(person)
})
const PORT = 3001
app.listen(PORT, () => console.log(`المنفذ على يعمل الخادم ${PORT}`))