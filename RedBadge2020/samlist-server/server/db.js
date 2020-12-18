const { Sequelize } = require('sequelize');
const db = new Sequelize(process.env.URL, {
    // host: 'localhost',
    dialect: 'postgres'
});

// sequelize.authenticate().then(
//     function() {
//         console.log(`Aye bub! Just here to say you're connected to the post database! Look at you!`);
//     },
//     function(err){
//         console.log(err)
//     }
// );
module.exports = db;