

function signup(){
	  var Email = document.getElementById("email").value;
  var Pass = document.getElementById("pass").value;
  
 firebase.auth().createUserWithEmailAndPassword(Email, Pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
 // alert(errorMessage);
});
	  alert("Account created ");
	  
  }