function abrir_anuncio(id){
    sessionStorage.setItem("id_veiculo", parseInt(id));
    window.open("pagina_veiculo.html");
}

function listar(){

    $("#main-content #lista1").html("");
    $("#main-content #lista-1").html("");
    
    let i = -1;
    
    lista_anuncios.forEach(function (item, indice, array){

        $("#lista" + i).append(
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
                    +"<img src='img/anuncios/a" + item.id_anuncio + "/img1.jpg' alt='Imagem do Veículo Anunciado'>"
                +"</div>"
                
                +"<div class='uk-width-1-1'>"
                    +"<div class=botao-anuncio>"
                        +"<button type='button' onclick=abrir_anuncio(" + item.id_anuncio + ") class='uk-button-primary uk-width-1-3@s uk-width-1-2@xl'>Ver Anúncio</button>"
                    +"</div>"
                +"</div>"
            +"</div>"
        )
        i *= -1;
    })
};

function filtrar_ano(){

    var min_ano = $("#filtro #min_ano").val();
    var max_ano = $("#filtro #max_ano").val();

    if (min_ano == ""){
        min_ano = "1900";
    }
    
    if (max_ano == ""){
        max_ano = "2021";
    }
    
    min_ano = parseInt(min_ano);
    max_ano = parseInt(max_ano);

    $("#main-content #lista1").children().each(function(){
        var index = parseInt($(this).attr("id").split("-")[1]);
        var anuncio = lista_anuncios[index];
        
        if (anuncio.ano < min_ano || anuncio.ano > max_ano){
            $("#anuncio-"+index).remove();
        }
    })

    $("#main-content #lista-1").children().each(function(){
        var index = parseInt($(this).attr("id").split("-")[1]);
        var anuncio = lista_anuncios[index];
        
        if (anuncio.ano < min_ano || anuncio.ano > max_ano){
            $("#anuncio-"+index).remove();
        }
    })
};

function filtrar_preco(){

    var min_preco = $("#filtro #min_preco").val();
    var max_preco = $("#filtro #max_preco").val();

    if (min_preco == ""){
        min_preco = "0";
    }
    
    if (max_preco == ""){
        max_preco = "100000000";
    }
    
    min_preco = parseFloat(min_preco);
    max_preco = parseFloat(max_preco);

    $("#main-content #lista1").children().each(function(){
        var index = parseInt($(this).attr("id").split("-")[1]);
        var anuncio = lista_anuncios[index];
        
        if (anuncio.preco < min_preco || anuncio.preco > max_preco){
            $("#anuncio-"+index).remove();
        }
    })

    $("#main-content #lista-1").children().each(function(){
        var index = parseInt($(this).attr("id").split("-")[1]);
        var anuncio = lista_anuncios[index];
        
        if (anuncio.preco < min_preco || anuncio.preco > max_preco){
            $("#anuncio-"+index).remove();
        }
    })
};

function filtrar_cambio(){

    var tipo_cambio = $("#filtro input[name=cambio]:checked").val();

    if (typeof(tipo_cambio) != "undefined"){
        tipo_cambio = parseInt(tipo_cambio);

        $("#main-content #lista1").children().each(function(){
            var index = parseInt($(this).attr("id").split("-")[1]);
            var anuncio = lista_anuncios[index]
            
            if (anuncio.cambio != tipo_cambio){
                $("#anuncio-"+index).remove();
            }
        })

        $("#main-content #lista-1").children().each(function(){
            var index = parseInt($(this).attr("id").split("-")[1]);
            var anuncio = lista_anuncios[index]
            
            if (anuncio.cambio != tipo_cambio){
                $("#anuncio-"+index).remove();
            }
        })
    }
};

function filtrar_combustivel(){

    var tipo_combustivel = [];

    $("#filtro input[name=combustivel]:checked").each(function(){
        tipo_combustivel.push(parseInt($(this).val()));
    })

    if (tipo_combustivel.length != 0){
        $("#main-content #lista1").children().each(function(){
            var index = parseInt($(this).attr("id").split("-")[1]);
            var anuncio = lista_anuncios[index]
            
            if (!tipo_combustivel.includes(anuncio.combustivel)){
                $("#anuncio-"+index).remove();
            }
        })

        $("#main-content #lista-1").children().each(function(){
            var index = parseInt($(this).attr("id").split("-")[1]);
            var anuncio = lista_anuncios[index]
            
            if (!tipo_combustivel.includes(anuncio.combustivel)){
                $("#anuncio-"+index).remove();
            }
        })
    }
};

function filtrar_carroceria(){

    var tipo_carroceria = [];
    
    $("#filtro input[name=carroceria]:checked").each(function(){
        tipo_carroceria.push(parseInt($(this).val()));
    })

    if (tipo_carroceria.length != 0){
        $("#main-content #lista-1").children().each(function(){
            var index = parseInt($(this).attr("id").split("-")[1]);
            var anuncio = lista_anuncios[index]
            
            if (!tipo_carroceria.includes(anuncio.carroceria)){
                $("#anuncio-"+index).remove();
            }
        })

        $("#main-content #lista1").children().each(function(){
            var index = parseInt($(this).attr("id").split("-")[1]);
            var anuncio = lista_anuncios[index]
            
            if (!tipo_carroceria.includes(anuncio.carroceria)){
                $("#anuncio-"+index).remove();
            }
        })
    }
};

function filtrar_marca(){

    var marca = parseInt($("#marcas").val());

    if (marca != -1){
        $("#main-content #lista1").children().each(function(){
            var index = parseInt($(this).attr("id").split("-")[1]);
            var anuncio = lista_anuncios[index]
            
            if (anuncio.marca != marca){
                $("#anuncio-"+index).remove();
            }
        })

        $("#main-content #lista-1").children().each(function(){
            var index = parseInt($(this).attr("id").split("-")[1]);
            var anuncio = lista_anuncios[index]
            
            if (anuncio.marca != marca){
                $("#anuncio-"+index).remove();
            }
        })
    }
};

function filtrar_local(){

    var local = parseInt($("#local").val());

    if (local != -1){
        $("#main-content #lista1").children().each(function(){
            var index = parseInt($(this).attr("id").split("-")[1]);
            var anuncio = lista_anuncios[index]
            
            if (anuncio.local != local){
                $("#anuncio-"+index).remove();
            }
        })

        $("#main-content #lista-1").children().each(function(){
            var index = parseInt($(this).attr("id").split("-")[1]);
            var anuncio = lista_anuncios[index]
            
            if (anuncio.local != local){
                $("#anuncio-"+index).remove();
            }
        })
    }
};

function filtrar(){
    
    listar();

    filtrar_ano();
    filtrar_preco();
    filtrar_cambio();
    filtrar_combustivel();
    filtrar_carroceria();
    filtrar_marca();
    filtrar_local();
};