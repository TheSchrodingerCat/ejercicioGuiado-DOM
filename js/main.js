function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	var valorEmail = document.getElementById('inputEmail').value;
	var valorPassword = document.getElementById("inputPassword").value;
	var printEmail = document.getElementById('correo');
	var printClave = document.getElementById('clave');

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión";

	printEmail.innerHTML = email.value;
	printClave.innerHTML = password.value;
}
translate();