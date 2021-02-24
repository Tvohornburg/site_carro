/*
    Declaração de Classes e Estruturas de Dados para a adição
    de elementos mais dinâmicos ao sistema Web. 
*/

class Usuario {

    /*
    Classe usada para representar um usuário cadastrado no Sistema

    Atributos:
            
        IMUTÁVEIS
            #id:                Int - Atributo estático para identificação incremental automática;
            id_usuario:         Int - Identificação única do usuário. Usado como 'chave primaria'
            tipo:               Int - Chave map tipo_anuncio
            
        MUTÁVEIS
            nome:               String
            email:              String
            senha:              String
    */

    static #id = 0;

    constructor(nome, email, senha, tipo){
        this.id_usuario = Usuario.#id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.tipo = tipo;
        
        Usuario.#id += 1;
    }

    // Exibe informações do usuário no console - Apenas para testes
    printConsole(){
        console.log("id: " + this.id_usuario);
        console.log("nome: " + this.nome);
        console.log("email: " + this.email);
        console.log("senha: " + this.senha);
    }
}


class Anuncio{

    /*
    Classe usada para representar um anúncio cadastrado no Sistema

    Atributos:
        
        IMUTÁVEIS
            #id:                Int - Atributo estático para identificação incremental automática
            id_anuncio:         Int - Identificação única do usuário. Usado como 'chave primaria'
            id_usuario:         Int - Valor referência para Usuario que cadastrou o anuncio
        
        MUTÁVEIS
            preco:              Float (> 0)
            marca:              Int - Chave map marcas
            cor:                String
            modelo:             String
            ano:                Int (>= 1900 && <= 2021)
            cambio:             Int - Chave map cambio
            combustivel:        Int - Chave map combustivel
            kilometragem:       Int (>= 0)
            carroceria:         Int - Chave map carroceria
            litragem_motor:     Float
            cv:                 Int (> 0)
            litragem_mala:      Int
            qtd_passageiros:    Int (> 0)
            local:              Int - map local
            descricao:          String
            qtd_imagens         Int (>= 0)
    */

    static #id = 0;

    constructor(id_usuario, preco, marca, cor, modelo, ano, cambio,combustivel, kilometragem,
        carroceria, litragem_motor, cv, litragem_mala, qtd_passageiros, local, descricao, qtd_imagens){
        
        this.id_anuncio = Anuncio.#id;
        this.id_usuario = id_usuario;
        this.preco = preco;
        this.marca = marca;
        this.cor = cor;
        this.modelo = modelo;
        this.ano = ano;
        this.cambio = cambio;
        this.combustivel = combustivel;
        this.kilometragem = kilometragem;
        this.carroceria = carroceria;
        this.litragem_motor = litragem_motor;
        this.cavalaria = cv;
        this.litragem_mala = litragem_mala;
        this.qtd_passageiros = qtd_passageiros;
        this.local = local,
        this.descricao = descricao;
        this.qtd_imagens = qtd_imagens;
        
        Anuncio.#id += 1;
    }

    // Exibe informações do Anuncio no console - Apenas para testes
    printConsole(){
        console.log("id_anuncio: " + this.id_anuncio);
        console.log("id_usuario: " + this.id_usuario);
        console.log("preço: " + this.preco);
        console.log("marca: " + this.marca);
        console.log("cor: " + this.cor);
        console.log("modelo: " + this.modelo);
        console.log("ano: " + this.ano);
        console.log("combustivel: " + this.combustivel);
        console.log("kilometragem: " + this.kilometragem);
        console.log("carroceria: " + this.carroceria);
        console.log("litragem motor: " + this.litragem_motor);
        console.log("cavalaria: " + this.cavalaria);
        console.log("litragem mala: " + this.litragem_mala);
        console.log("quantidade passageiros: " + this.qtd_passageiros);
        console.log("local: " + this.local);
        console.log("descrição: " + this.descricao);
        console.log("qtd_imagens: " + this.qtd_imagens);
    }
}

/*
Não foi possível finalizar esse aspecto da implementação. Fica aqui um detalhe
para futuras melhorias!

class Favorito{

    Classe usada para representar um anuncio favoritado por um usuário no Sistema.
    Opera como uma classe associativa entre Usuario e Anuncio.

    Atributos:

        IMUTÁVEIS
            id_usuario: Int - Referência para objeto do tipo Usuario
            id_anuncio: Int - Referência para objeto do tipo Anuncio


    constructor(id_usuario, id_anuncio){
        this.id_usuario = id_usuario;
        this.id_anuncio = id_anuncio;
    }

    // Exibe informações do objeto Favorito no console - Apenas para testes
    printConsole(){
        console.log("id_usuaraio: " + this.id_usuario);
        console.log("id_anuncio: " + this.id_anuncio);
    }
}
*/

// Mapeamento dos tipos de anúncios aceitos pelo sistema
var tipo_conta = new Map();
tipo_conta.set(0,"Particular");
tipo_conta.set(1,"Profissional");

// Mapeamento de marcas de veículos aceitos pelo sistema
var marcas = new Map();
marcas.set(0,"Honda");
marcas.set(1,"Volkswagen");
marcas.set(2,"Ford");
marcas.set(3,"Chevrolet");
marcas.set(4,"BMW");
marcas.set(5,"Jeep");
marcas.set(6,"Ferrari");
marcas.set(7,"Renault");

// Mapeamento de tipos de câmbios aceitos pelo sistema
var cambio = new Map();
cambio.set(0,"Manual");
cambio.set(1,"Automático");

// Mapeamento de combústiveis aceitos pelo sistema
var combustivel = new Map();
combustivel.set(0,"Gasolina");
combustivel.set(1,"Álcool");
combustivel.set(2,"Diesel");
combustivel.set(3,"Flex");
combustivel.set(4,"Elétrico");
combustivel.set(5,"Híbrido");

// Mapeamento de carrocerias aceitas pelo sistema
var carroceria = new Map();
carroceria.set(0, "Sedã");
carroceria.set(1, "Hatch");
carroceria.set(2, "SUV");
carroceria.set(3, "Picape");
carroceria.set(4, "Cupê");
carroceria.set(5, "Perua");
carroceria.set(6, "Van/Minivan");
carroceria.set(7, "Conversível");
carroceria.set(8, "Jipe");

// Mapeamento de locais aceitos pelo sistema
// Criado com intuito de simular localidades
// Passíveis de serem Filtradas
var local = new Map();
local.set(0,"Bluemenau - SC");
local.set(1,"Pomerode - SC");
local.set(2,"Benedito Novo - SC");
local.set(3,"Jaraguá do Sul - SC");
local.set(4,"São Paulo - SP");
local.set(5,"Indaial - SC");
local.set(6,"Florianópolis - SC");
local.set(7,"Curitiba - PR");
local.set(8,"Campinas - SP");