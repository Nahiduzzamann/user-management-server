const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json())
const users = [
    { "id": 1, "name": 'Nahid', "email": 'nahid@gmail.com' },
    { "id": 2, "name": 'Nabir', "email": 'nabir@gmail.com' }
]
app.get('/', (req, res) => {
    res.send('User Management Server is running')
})
app.get('/users', (req, res) => {
    res.send(users)
})
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    console.log(newUser);
    res.send(newUser)


})

app.listen(port, () => {
    console.log(`server is running on PORT: ${port}`);
})