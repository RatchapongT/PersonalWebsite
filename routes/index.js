var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/home', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/download/:filename', function (req, res) {
    var file = __dirname + '/documents/' + req.params.filename;
    res.download(file); // Set disposition and send it.
});

router.get('/projects/firstwebsite/', function (req, res, next) {
    res.render('firstwebsite/index', {title: 'My First Website!'});
});


router.get('/projects/firstwebsite/mailform', function (req, res, next) {
    res.render('firstwebsite/mailform', {title: 'My First Website!'});
});

router.get('/projects/matlabship', function (req, res, next) {
    res.render('projects/matlabship', {title: 'MATLAB Pirate Ship'});
});

router.post('/projects/firstwebsite/thankyou', function (req, res, next) {
    res.render('firstwebsite/thankyou', {title: 'My First Website!'});
});

module.exports = router;
