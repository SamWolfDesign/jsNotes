let express = require('express');
let router = express.Router();
// let validateSession = require('../middleware/validate-session');

// router.get('/practice', validateSession, function(req, res) 
// {
//     res.send('Hey!! This is a practice route!')
// })
router.get("/please", (req, res) => {
    res.send("LaDiDa")
})
module.exports = router