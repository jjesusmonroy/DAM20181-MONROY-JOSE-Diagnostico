function factorial(){
			
	var tabla;
	var cadena=1;
	var value=1;
	var table = document.getElementById("tablita");
		table.innerHTML=" "; 
		for (var i = 1; i <= document.getElementById("numero").value; i++) {
			tabla = {
			    iteracion: i,
			    expresion: cadena+="*"+i,
			    valor: value*=i,
			};
			    
			    var row = table.insertRow(i-1);
			    var cell1 = row.insertCell(0);
			    var cell2 = row.insertCell(1);
			    var cell3 = row.insertCell(2);

			    cell1.innerHTML = tabla.iteracion,
			    cell2.innerHTML = tabla.expresion,
			    cell3.innerHTML = tabla.valor;
		}
}
function name(){
	localStorage.getItem("key");
}

