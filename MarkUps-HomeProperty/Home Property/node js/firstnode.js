var app = require("express")();
var i;
app.get("/",function(req ,res){
	res.send("Hi there weelcome to my assignment");
})
app.get("/speak/:animal",function(req, res){
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
app.get("/repeat/:var/:num", function(req, res){
	var character = req.param.var;
	var times = req.param.num;
	var output;
	for(i= 0;i<times;i++){
		output +=character + " ";
	}
	res.send(output);
})
app.get("*",function(req, res){
	res.send("Sorry the page doesn't exists");
})
app.listen(3000 ,function(){
	console.log("the server has been started");
})