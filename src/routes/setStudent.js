var express= require('express');
var router= express.Router();
/* GET users listing. */
router.post('/', function(req,res, next) {data= req.body;console.log(data);

MyContract.methods.setProfile(data.uid, data.firstname, data.age, JSON.parse(data.disabled)).send({from:accountAddress}).then((txn) =>{
console.log(JSON.stringify(txn));

})
res.send("succes");
});

module.exports= router;
