$(document).ready(
            function (load)
            {
                var url = 'http://appcon/json.php';

                function fetch() 
                {          

                    $.getJSON(url, function (result)
                    {
                        
                        console.log(result);
                        $.each(result, function (i, field)
                        {
                            var id = field.id;
                            var nome = field.nome;
                            var sobrenome = field.sobrenome;
                            var telefone = field.telefone;
                            var id_status_fk = field.id_status_fk;
                            var id_status = field.id_status;
                            var nome_status = field.nome_status;
                            var icons_status = field.icons_status;
                            var cor_status = field.cor_status;
                                
                            $("#ajax").append("<tr><td><a href=" + id + ">" + nome + "</a></td><td>" + sobrenome + "</td><td>" + telefone + "</td><td><div class='btn bg-"+cor_status+"'><i class='material-icons'>"+icons_status+"</i> "+ nome_status+"</div></td>");
                        });
                        
                    });
                }
                //setInterval(fetch, 5000);// call fetch every 5 seconds
                fetch(); // call fetch first time
            });
            

            // var req;
            // function dados()
            // {
            //     if(window.XMLHttpRequest)
            //     {
            //         req = new XMLHttpRequest();
            //     };
            //     else if(window.ActiveXObject)
            //     {
            //         req = new ActiveXObject("Microsoft.XMLHTTP");
            //     };
            //     var url = "http://appcon/json.php";

            //     req.open("Get", url, true);
            //     req.onreadystatechange = function() 
            //     {
            //         if (req.readyState == 1)
            //         {
            //             document.getElementById('ajax').innerHTML = 'Buscando Pacientes...';
            //         };          
            //         if (req.readyState == 4){
            //             if (req.status == 200 || req.status ==304)
            //             {

            //                 var dados = eval("(" + req.responseText + ")");
            //                 var id = dados.id;
            //                 var nome = dados.nome;
            //                 var sobrenome = dados.sobrenome;
            //                 var telefone = dados.telefone;

            //                 document.getElementById('ajax').innerHTML = "<tr><td><a href="+id+">"+nome+"</a></td><td>"+sobrenome+"</td><td>"+telefone+"</td></tr>";
            //             }; 
            //         };        
            //     };
            // };
            // function iniciaAjax() {
            //     var objetoAjax = false;
            //     if(window.XMLHttpRequest)
            //     {
            //         objetoAjax = new XMLHttpRequest();

            //     }
            //     else if(window.ActiveXObject)
            //     {
            //         objetoAjax = new ActiveXObject("Msxml2.XMLHTTP");
            //         if (!objetoAjax) 
            //         {
            //             objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");
            //         }
            //     }
            //     else
            //     {
            //         alert("nao suporta!");
            //     }
            //     return objetoAjax;
            // }

            // var requisicaoAjax = iniciaAjax();
            // if (requisicaoAjax)
            // {
            //     requisicaoAjax.open("Get","http://appcon/json.php",true);
            //     requisicaoAjax.onreadystatechange = function() 
            //     {   
            //         if (requisicaoAjax.readyState == 4) 
            //         {
            //             if (requisicaoAjax.status == 200) 
            //             {
            //                 var dados = eval("("+requisicaoAjax.responseText+")");
            //                 var id_dado = dados.id;
            //                 var nome_dado = dados.nome;
            //                 var sobrenome_dado = dados.sobrenome;
            //                 var telefone_dado = dados.telefone;

            //                 var id = document.createTextNode(telefone_dado);
            //                 var id = document.createElement("alex");
            //                 var nome = document.createTextNode(telefone_dado);
            //                 var sobrenome = document.createTextNode(telefone_dado);
            //                 var telefone = document.createTextNode(telefone_dado)

            //                 var insere = document.getElementById('ajax3');

            //                 document.getElementById('ajax3').innerHTML ="<tr><td><a href="+id+">"+nome+"</a></td><td>"+sobrenome+"</td><td>"+telefone+"</td></tr>";
            //             }
            //             else
            //             {
            //                 alert("Problema com a requisição feita ao servidor");
            //             }
            //         }
            //     };
            //     requisicaoAjax.send();
            // }




            // function trataResposta(requisicaoAjax)
            // {
            //     if(requisicaoAjax.readyState == 4)
            //     {
            //         if (requisicaoAjax.status == 200 || requisicaoAjax.status == 304)
            //         {
            //             var dados = eval("(" + requisicaoAjax.responseText")");
            //             var id = dados.id;
            //             var nome = dados.nome;
            //             var sobrenome = dados.sobrenome;
            //             var telefone = dados.telefone;

            //             document.getElementById('ajax3').innerHTML ="<tr><td><a href="+id+">"+nome+"</a></td><td>"+sobrenome+"</td><td>"+telefone+"</td></tr>";
            //         }
            //     }
            //     else
            //     {

            //     }
            // }