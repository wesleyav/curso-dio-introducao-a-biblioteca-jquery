function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            // console.log(response);
            //Exibindo os valores por id via Ajax
            $("#titulo_cep").html(" CEP: " + response.cep);

            $("#logradouro").html(response.logradouro);
            $("#complemento").html(response.complemento);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            
            //Exibe e oculta a barra de progressos
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    })
}
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})

