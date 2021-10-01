const express = require('express');
const app = express();

const BodyParser = require('body-parser');
const { port } = require('./config.json');
const handlers = require('./actions/errorHandlers');
const routes = require('./routes/index');

app.use(BodyParser.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use("/", routes)
app.use(handlers.Err404)
app.use(handlers.catchError)

app.listen(port, () => {
    console.log('Listening on port ' + port)
    console.log('Connecting... http://localhost:'+ port)
})