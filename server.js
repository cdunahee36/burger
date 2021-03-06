const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const bars = require('express-handlebars');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', bars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//pulls the controller file to here
const routes = require('./controllers/burgeregrub.controller.js');
app.use(routes);


app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});