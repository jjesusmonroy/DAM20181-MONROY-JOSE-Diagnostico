function validar(){
	if(document.form.Cajatexto1.value=='admin' && document.form.Cajatexto2.value=='admin'){
		localStorage.setItem("key",document.form.Cajatexto1.value);
		window.location="mainScreen.html"

	}
	else {
		alert("Username or Password are wrong");
	}

}