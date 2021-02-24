/*
    Criação de Objetos para serem usados no Sistema.
    Os dados são meramente exemplificativos e não
    busca-se semelhanças com nenhum aspecto real!
*/

// Criação de Usuários de Teste
user1 = new Usuario("User1", "user1@gmail.com", "user1", 0);
user2 = new Usuario("User2", "user2@gmail.com", "user2", 1);

var lista_usuarios = [user1, user2];

// CRIAÇÃO DOS ANÚNCIOS

a0 = new Anuncio(
    0,
    120000.00,
    0,
    "Branco",
    "Civic 1.5 16V TURBO GASOLINA TOURING 4P CVT",
    2018,
    1,
    0,
    12000,
    0,
    1.5,
    173,
    519,
    5,
    0,
    "Carro Impecável e Completo. É muito confiável, e está praticamente Zero",
    13
);

a1 = new Anuncio(
    1,
    12500.00,
    1,
    "Verde",
    "Fusca 1300L",
    1986,
    0,
    1,
    150000,
    1,
    1.3,
    46,
    141,
    5,
    1,
    "Carro Impecável e Completo. É muito confiável, e está praticamente Zero",
    8
);

a2 = new Anuncio(
    0,
    35000.00,
    2,
    "Branca e Azul",
    "Rural 4X4 6 CILINDROS 12V",
    1973,
    0,
    0,
    50000,
    2,
    2.8,
    110,
    "Não Informado",
    5, 
    2,
    "Carro Impecável e Completo. É muito confiável, e está praticamente Zero",
    9
);

a3 = new Anuncio(
    1,
    50000.00,
    1,
    "Preto",
    "Gol 1.0",
    2021,
    0,
    3,
    0,
    1,
    1.0, 
    84,
    285,
    5, 
    0,
    "Carro Impecável e Completo. É muito confiável, e está praticamente Zero",
    7
);

a4 = new Anuncio(
    0,
    234450.00,
    3,
    "Marrom",
    "S10 High Country 4x4",
    2021,
    1,
    2,
    0,
    3,
    2.8,
    200,
    1100,
    5,
    3,
    "Nada a declarar",
    9
);

a5 = new Anuncio(
    1,
    308900.00,
    4,
    "Azul",
    "320i M Sport",
    2020,
    1,
    0,
    600,
    0,
    2.0,
    258,
    480,
    5, 
    4,
    "Meu, é uma BMW... Você sabe que é show!",
    10
);

a6 = new Anuncio(
    0,
    158000.00,
    5,
    "Prata",
    "Compass 2.0 16V DIESEL LIMITED 4X4 AUTOMÁTICO",
    2018,
    1,
    2,
    38430,
    2,
    2.0,
    170,
    410,
    5, 
    0,
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maiores id quia aliquam libero veniam, eius aspernatur cupiditate, odio quos nostrum alias impedit sed illum molestias et temporibus perspiciatis sapiente?",
    9
);

a7 = new Anuncio(
    1,
    50000.00,
    3,
    "Prata",
    "Spin LTZ 1.8 Econoflex",
    2016,
    1,
    3,
    58732,
    6,
    1.8, 
    "Não Informado",
    710,
    7,
    5,
    "Boa e Barata. É pegar e andar!",
    7
);

a8 = new Anuncio(
    0,
    115000.00,
    2,
    "Preto",
    "Fusinon Titanium 16v Hybrid",
    2017,
    1,
    5,
    18.756,
    1,
    2.0,
    190,
    392,
    5,
    6,
    "Recibo em branco; Prontinho pra transferir; Fusion Híbrido; Ford; Confortável",
    9
);

a9 = new Anuncio(
    1,
    2395000.00,
    6,
    "Vermelho",
    "FERRARI 488 GTB V8 Turbo",
    2016,
    1,
    0,
    2.600,
    4,
    3.9,
    670,
    230,
    2,
    7,
    "Uma descrição verídia e nada falsa!",
    13
);

a10 = new Anuncio(
    0,
    205000.00,
    7,
    "Branco",
    "Zoe Intense",
    2021,
    1,
    4,
    0,
    1,
    0,
    92,
    388,
    5, 
    8,
    "VIVA OS ELÉTRICOS",
    10
);

var lista_anuncios = [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];

// Rápida solução para adição de favoritos - Aspecto meramente Ilustrativo
var lista_favoritos = [a0, a3, a8];