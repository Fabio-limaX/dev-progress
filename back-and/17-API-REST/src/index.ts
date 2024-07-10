import 'dotenv/config'
import Express  from "express";

const app = Express()

app.get('/', (req, res) => {
    return res.send('OK!')
})

app.listen(process.env.PORT)