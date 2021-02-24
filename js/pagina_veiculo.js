function carregar_dados_anuncio(){
    var objeto = lista_anuncios[sessionStorage.getItem("id_veiculo")];
    
    $("#main-content").append(
        "<div id=anuncio class='uk-flex-middle' uk-grid>"
            +"<div id=slide-show class='uk-width-1-1' uk-slideshow='animation:push'>"
                +"<div id=list-images class='uk-position-relative uk-visible-toggle uk-light uk-width-1-2@s uk-align-center' tabindex='-1'>"
                    +"<ul class=uk-slideshow-items></ul>"
                    +"<a class='uk-position-center-left uk-position-small uk-hidden-hover' href=# uk-slidenav-previous uk-slideshow-item='previous'></a>"
                    +"<a class='uk-position-center-right uk-position-small uk-hidden-hover' href=# uk-slidenav-next uk-slideshow-item='next'></a>"
                +"</div>"
            +"</div>"  
            +"<div class='uk-width-1-2@s'>"
                +"<ul class='uk-list uk-list-striped'>"
                    +"<li>Preço R$ " + objeto.preco + "</li>"
                    +"<li>Modelo: " + objeto.modelo + "</li>"
                    +"<li>Marca: " + objeto.marca + "</li>"
                    +"<li>Ano: " + objeto.ano + "</li>"
                    +"<li>Kilometragem: " + objeto.kilometragem + " Km</li>"
                    +"<li>Cor: " + objeto.cor + "</li>"
                    +"<li>Câmbio: " + cambio.get(objeto.cambio) + "</li>"
                    +"<li>Combustível: " + combustivel.get(objeto.combustivel) + "</li>"
                    +"<li>Carroceria: " + carroceria.get(objeto.carroceria) + "</li>"
                    +"<li>Litragem do Motor: " + objeto.litragem_motor + " L</li>"
                    +"<li>Cavalaria: " + objeto.cavalaria + " cv</li>"
                    +"<li>Porta-Malas: " + objeto.litragem_mala + " L</li>"
                    +"<li>Máximo de Passageiros: " + objeto.qtd_passageiros + "</li>"
                    +"<li>Local: " + local.get(objeto.local) + "</li>"
                    +"<li>Anunciante: <a href=error.html target=blank>" + objeto.id_usuario + "</a></li>"
                +"</ul>"
            +"</div>"
            +"<div class='uk-width-1-2@s'>"
                +"<iframe id=maps class='uk-width-1-1' src='https://maps.google.com/maps?q=" + local.get(objeto.local) + "&t=&z=13&ie=UTF8&iwloc=&output=embed' frameborder=0 allowfullscreen></iframe>" 
                +"<textarea id=desc class='uk-width-1-1 uk-margin' name=descricao rows=20 readonly>" + objeto.descricao + "</textarea>"
            +"</div>"
        +"</div>"
    )

    let i = 1;
    let qtd_imagens = objeto.qtd_imagens;
    
    for (i; i<=qtd_imagens; i++){
        $("#main-content #anuncio #slide-show #list-images ul").append(
            "<li>"
                +"<img src=img/anuncios/a" + objeto.id_anuncio + "/img" + i + ".jpg alt=teste uk-cover>"
            +"</li>"
        )
    }

    sessionStorage.removeItem("id_veiculo");
};