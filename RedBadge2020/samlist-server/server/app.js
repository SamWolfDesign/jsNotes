require("dotenv").config();
let express = require('express');
let db = require('./db');
let app = express();


// let post = require('./controllers/postcontroller');
let controllers = require('./controllers');
// const { beforeDefine } = require("./db");

// sequelize.sync();
//sequelize.sync({force: true})
// app.use(express.json());

app.use(require('./middleware/headers'));
app.use('/user', controllers.usercontroller)

// app.use('/post', post);
db.authenticate() 
.then(() => db.sync())
.then(() => {
    app.listen(3000, function(){
        console.log('App is listening on port 3000');
    })
})