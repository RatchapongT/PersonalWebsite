var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/download/:filename', function (req, res) {
    var file = __dirname + '/documents/' + req.params.filename;
    res.download(file); // Set disposition and send it.
});

module.exports = router;
