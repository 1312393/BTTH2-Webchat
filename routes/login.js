var express = require('express');
var router = express.Router();
router.get('/login', function(req, res) {
    res.render('login',{
            title : 'Login page'
    })
});
router.post('/login', function(req,res){
     res.redirect('/');
});
module.exports = router;
