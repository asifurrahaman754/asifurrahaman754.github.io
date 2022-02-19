const express =  require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("hello asif, kya hal hai?")
})

app.listen(8000, () => {
    console.log("listening to port 8000");
})