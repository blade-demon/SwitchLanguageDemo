var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    // var lng = req.language; // 'de-CH'
    // var lngs = req.languages; // ['de-CH', 'de', 'en']
    // req.i18n.changeLanguage('en'); // will not load that!!! assert it was preloaded
    // console.log(req.i18n.exists('Welcome'));
    // var exists = req.i18n.exists('Welcome');
    // var translation = req.t('Welcome');
    res.render('index');
});

module.exports = router;