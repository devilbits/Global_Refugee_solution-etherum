var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var router = express.Router();
var Web3   = require('web3');
var abi = require('ethereumjs-abi');
const abiDecoder = require('abi-decoder');

var web3 = new Web3('http://localhost:8545');

var crypto = require('crypto');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('refugee');
});
router.get('/portal', function(req, res, next) {
  res.render('login');
});

router.post('/set',(req,res,next)=>{
	
		var id = req.body.id;
		var name = req.body.name;
		var country = req.body.country;
		var age = req.body.age;
		var gender =req.body.gender;
		var bloodgroup = req.body.bloodgroup;
		var pass =req.body.pass;
        var password = crypto.createHash("sha256").update(pass).digest("hex").substr(0,6);   
        
        var createAccount = async () => {
        var addrs = await web3.eth.personal.newAccount(pass);
        refugeeCoin.methods.transfer(addrs,10000).send({from:accountAddress,gas:600000});
   		MyContract.methods.addRefugee(id,name,country,age,gender,bloodgroup,addrs,password).send({from:accountAddress,gas:600000}).then((txn) =>{
        console.log(JSON.stringify(txn));})};

		createAccount();       
        
		res.send({status:'data added succesfully'})
          
})

router.get('/get',(req,res,next)=>{
	
    var regNo = req.query.regNo;
    MyContract.methods.getRefugee(parseInt(regNo)).call({from:accountAddress}).then((txn)=>{console.log(txn);
    
       var a = {status:[]};
       for(let i=1;i<1000;i++){
			web3.eth.getBlock(i, (err, block) => {
                if (block != null) {
                    block.transactions.forEach(tx => {
    					web3.eth.getTransactionReceipt(block.transactions[0]).then(x=>{
      
       						 if(x.logs[0]!=undefined){
       						 	//x.from is the from address obtained from the recipt,where txn._passNo is the 
       						 	//address associated with the refugee's account
       						 	    console.log(x);
       						 	    console.log('<===============================================>');
       						 	    console.log('<===============================================>');
        							if(x.from==txn._passNo){
                  						 a.status.push(x);
          							}
         					}

    					})
 					})
             	}	
			});

		}



    
    res.render('refugeeData',{name:txn._name,country:txn._country,addrs:txn._passNo,age:txn._age,gender:txn._refugeeGender,data:JSON.stringify(a.status)});
    })
    
    
})

router.post('/refugeePortal',urlencodedParser,function(req, res, next) {
    
    var data = JSON.parse(JSON.stringify(req.body));
    
    var pass = data.pass_no;
    var regNo = data.regNo;
	var name = data.name;
	var country = data.country;

	var password = crypto.createHash("sha256").update(pass).digest("hex").substr(0,6);

    MyContract.methods.getRefugee(parseInt(regNo)).call({from:accountAddress}).then((txn)=>{console.log(txn);
    if(password==txn._hash){
    	let name = txn._name;
    	let country = txn._country;
    	let address = txn._passNo;
    	//res.send(name+'----'+country+'----'+address);
    	 refugeeCoin.methods.balanceOf(address).call({from:accountAddress}).then(txn1=>{
    	 	web3.eth.personal.unlockAccount(address,pass,3000000);
    	 	res.render('portal',{name:name,country:country,address:address,balance:txn1});
    	 });
    	// res.render('portal',{name:name,country:country,address:address});
    }	
    // res.send(txn._name);
    })
});
router.post('/tokenSpend',(req,res,next)=>{
	console.log('spending...');
	var a = {'food':false,'accomadation':false,'cloths':false,'medicine':false,'education':false};
	var b = [];
	var data = req.body.data;
	var value= req.body.value;
	var addrs = req.body.addrs;
	   

    var createAccount = async () => {
        var addrs = await web3.eth.personal.newAccount('name');
        return addrs;
        console.log('created adress='+addrs);
        
     }
   
   
    if(a[data]==false){
    	createAccount().then(to=>{
    		console.log('addrs='+addrs+',to='+to+',value='+value);
              refugeeCoin.methods.transferFrom(addrs,to,value).send({from:accountAddress,gas:60000});
              a[data]=true;
              b.push({data:to})
              res.send({status:true,to:to,value:value,data:data});

    		})
    }else{
    	b.forEach(x=>{if(data){
    		let adrs = x[data];
    		refugeeCoin.methods.transferFrom(addrs,adrs,value).send({from:accountAddress,gas:60000});
    		res.send({status:true,to:to,value:value,data:data});
    	}})
    }

  

})

module.exports = router;
