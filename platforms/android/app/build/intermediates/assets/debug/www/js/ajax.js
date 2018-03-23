var req

function buscarPaciente(valor) {
	req = new XMLHttpRequest()

	var url = "http://appcon/json.php?busca="+valor

	req.open("Get", url, true)
	req.onreadystatechange = function()
	{
		if (req.readyState = 4 && req.status == 200)
		{
			ajax(req.responseText)
		}
	}
	req.send(null)
	function ajax(response) {
		if(response == '') return;
		var dados = JSON.parse(response)
		var html = ""
		console.log()
		dados.forEach( function (registro){
			html += "<tr><td>"
      +registro.nome
      +"</td><td>"
      +registro.sobrenome
      +"</td><td>"
      +registro.telefone
      +"</td><td>"
      +"<div class='btn bg-"+ registro.cor_status +"'>"
      +"<i class='material-icons'>"+registro.icons_status+"</i>"
      +"<span>"+registro.nome_status+"</span>"
      +"</div>"
      +"</td></tr>"
		})
		document.getElementById('ajax').innerHTML = html
		
	}
}
function exibirConteudo(id)
{
	req = new XMLHttpRequest()
}