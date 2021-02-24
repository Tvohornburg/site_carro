function realizar_login(){

    let email = $("#login-email").val();
    let senha = $("#login-senha").val();

    lista_usuarios.forEach(function (item, indice, array){
        
        if (item.email == email && item.senha == senha){
            
            sessionStorage.setItem("user_id", item.id_usuario);
            window.location.href = "perfil.html";

        }
    
    });

    if (sessionStorage.getItem("user_id") == null)
        alert("Falha ao Realizar Login - Usuário não Cadastrado!");
};

function verificar_login(){
    if (sessionStorage.getItem("user_id") == null)
        var endereco = "login.html";    
    else
        var endereco = "perfil.html";
    
    $(".link-login").each(function(){
        $(this).attr("href",endereco);
    })
}