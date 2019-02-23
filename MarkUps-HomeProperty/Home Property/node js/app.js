var app = require("express")();
var request = require("request");
app.get("/",function(req ,res){
	res.send("Home Page");
})
app.get("/login",function(req, res){
	var ani = req.param.animal;
	if(ani == "pig"){
		res.send("The pig says oink");
	}
	else if( ani == "cow"){
		res.send("The cow says moo.");
	}
	else if(ani == "dog"){
		res.send("the dog says woof-woof");
	}
	else
		res.send("no such dir is been entered");
})
app.get("/register", function(req, res){
	var character = req.param.var;
	var times = req.param.num;
	var output;
	for(var i= 0;i<times;i++){
		output +=character + " ";
	}
	res.send(output);
})
app.get("*",function(req, res){
	res.send("Sorry the page doesn't exists");
})

request('http://api.agromonitoring.com/agro/1.0/weather/forecast?appid=a46e6e26bf4b55ddfb0267318dc3092a',
       function (error, response, body){
    if(!error && response.statusCode == 200){
        console.log(body);
    }
})





























app.listen(3000 ,function(){
	console.log("the server has been started");
})