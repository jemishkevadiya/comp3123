const express = require("express")
const app = express()
const SERVER_PORT = process.env.SERVER_PORT || 3007

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/hello', (req, res) => {
    res.send("Hello Express JS")
});

app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Pritesh';
    const lastname = req.query.lastname || 'Patel';
    res.json({ firstname, lastname });
});

app.post('/users/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname })
});

app.listen(SERVER_PORT, () => {
    console.log("Server is listening to :- http://localhost:" + SERVER_PORT)
});