var mainText = document.getElementByid("mainText");
var submitBtn = document.getElementByid("submitBtn");






function submitClick()
{
//	var firebaseRef= firebase.database().ref();
//	var messageText=mainText.value;

//window.alert("no");
//       firebaseRef.child("ram").set(messageText);


//window.alert("yes");
var rootRef = firebase.database().ref().child("seed");

	rootRef.on("child_added",snap => 
		{
		var seed_name=snap.child("seed_name").val();
			var seed_mos= snap.child("seed_mos").val();
		var seed= document.getElementById("mainText").value;
//console.log(seed_name);

    //   $("#table_body").append("   " +seed_name + "  "+seed_mos+  )

		//alert(seed);	
		if(seed == seed_name){
	window.alert( "Seed Found =  " +seed_name + "   seed Moisture = " + seed_mos);
		
		}
	//window.alert("seed found=  "+ seed_name +  "  seed Moisture= "+ seed_mos );

		}
	
	
	
	
	);



}
