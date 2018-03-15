var req

function buscarPaciente(valor) {
	req = new XMLHttpRequest()

	var url = "http://appcon/json.php?busca="+valor

	req.open("Get", url, true);
	req.onreadystatechange = function()
	{
		if (req.readyState = 1)
		{
			document.getElementById('ajax').innerHTML= "<td colspan='4'>Buscando Pacientes...</td>"
		}
		if (req.readyState = 4 && req.status == 200)
		{
			ajax(req.responseText)
		}
	}
	req.send(null);
	function ajax(response) {
		var dados = response
		console.log(dados)
		JSON.parse(dados).forEach( function (registro){
			var html = "<td>"
					html += registro.nome
					html += "</td>"
					html += "<td>"
					html += registro.sobrenome
					html += "</td>"
					html += "<td>"
					html += registro.telefone
					html += "</td>"
					html += "<td>"
					html += registro.nome_status
					html += registro.icons_status
					html += registro.cor_status
					html += "</td>"
					document.getElementById('ajax').innerHTML= html
		})
		
	}
}

function exibirConteudo(id)
{
	req = new XMLHttpRequest()
}