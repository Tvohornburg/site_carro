function carregar_dados(user_id){
    var objeto = lista_usuarios[sessionStorage.getItem("user_id")];

    $("#usuario-nome").val(objeto.nome);
    $("#usuario-email").val(objeto.email);
    $("#usuario-tipo-conta").val(tipo_conta.get(objeto.tipo));

}

function editar_perfil(){
    $("#dados-alteracao").css("display","block");
    
    $("#usuario-nome").prop("readonly",false);
    $("#usuario-email").prop("readonly",false);
}

function abrir_anuncio(id){
    sessionStorage.setItem("id_veiculo", parseInt(id));
    window.open("pagina_veiculo.html");
}

function carregar_meus_anuncios(id_usuario){
    apagar_listas()
    
    let i = -1;
    
    lista_anuncios.forEach(function (item, indice, array){
        if (id_usuario == item.id_usuario) {
            
            $("#anuncios #lista" + i).append(
                "<div id=anuncio-" + item.id_anuncio + " class='uk-flex-middle' uk-grid>"    
                    +"<div class='uk-width-2-3@s uk-width-1-2@xl'>"
                        +"<ul class='uk-list uk-list-striped'>"
                            +"<li class='info-modelo'>Modelo: " + item.modelo + "</li>"
                            +"<li class='info-ano'>Ano: " + item.ano + "</li>"
                            +"<li class='info-km'>Kilometragem: " + item.kilometragem + " km</li>"
                            +"<li class='info-preco'>Preço: R$ " + item.preco + "</li>"
                        +"</ul>"
                    +"</div>"
                    
                    +"<div class='uk-width-1-3@s uk-width-1-2@xl uk-flex-first'>"
                        +"<img src='img/anuncios/a" + item.id_anuncio + "/img1.jpg' alt='Image'>"
                    +"</div>"
                    
                    +"<div class='uk-width-1-1'>"
                        +"<button type='button' onclick=abrir_anuncio(" + item.id_anuncio + ") class='uk-button-primary uk-width-1-3@s uk-width-1-2@xl'>Ver Anúncio</button>"
                    +"</div>"
                +"</div>"
            );
        
            i *= -1;
        };
    });
};

function carregar_meus_favoritos(){

    apagar_listas();

    let i = -1;
    
    lista_favoritos.forEach(function (item, indice, array){

        $("#anuncios #lista" + i).append(
            "<div id=anuncio-" + item.id_anuncio + " class='uk-flex-middle' uk-grid>"    
                    +"<div class='uk-width-2-3@s uk-width-1-2@xl'>"
                        +"<ul class='uk-list uk-list-striped'>"
                            +"<li class='info-modelo'>Modelo: " + item.modelo + "</li>"
                            +"<li class='info-ano'>Ano: " + item.ano + "</li>"
                            +"<li class='info-km'>Kilometragem: " + item.kilometragem + " km</li>"
                            +"<li class='info-preco'>Preço: R$ " + item.preco + "</li>"
                        +"</ul>"
                    +"</div>"
                    
                    +"<div class='uk-width-1-3@s uk-width-1-2@xl uk-flex-first'>"
                        +"<img src='img/anuncios/a" + item.id_anuncio + "/img1.jpg' alt='Image'>"
                    +"</div>"
                    
                    +"<div class='uk-width-1-1'>"
                        +"<button type='button' onclick=abrir_anuncio(" + item.id_anuncio + ") class='uk-button-primary uk-width-1-3@s uk-width-1-2@xl'>Ver Anúncio</button>"
                    +"</div>"
                +"</div>"
        )
        i *= -1;
    });
}

function apagar_listas(){
    $("#main-content #lista1").html("");
    $("#main-content #lista-1").html("");
}

function logout(){
    if (sessionStorage.getItem("user_id") != null)
        sessionStorage.removeItem("user_id");
    
    window.location.href = "home.html";
}