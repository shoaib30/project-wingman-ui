var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'public/index.html'));

});

router.get('/test', function(req, res, next) {
  var response = {};   response.name = "NAME";   
  response.list = ["lorem", "lorem2",  "lorem3"]   
  console.log(JSON.stringify(response));  
  res.send(JSON.stringify(response))
});
module.exports = router;
