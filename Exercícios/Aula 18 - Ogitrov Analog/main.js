const { Empresa } = require("./Ogitrov Analog/Empresa.js");
const { Estagiario, CLT, PJ } = require("./Ogitrov Analog/Funcionários.js");
const { Email, Endereco, TipoEmail, UFs } = require("./Ogitrov Analog/Utils.js");

let estagiarios = [
    new Estagiario("Raul Medeiros", "02/05/2000", new Email("raulmedeiros9@gmail.com", TipoEmail[0]), new Endereco("Rua campo bonito", 146, 
    "N Alvorada", "Alvorada", UFs.RS, 94832040), "01/01/2024", "01/01/2040", 1000, "raulmedeiros9@gmail.com"),
    new Estagiario("Rodrigo Monteiro", "02/10/2000", new Email("rodrigo_m_rodrigues@gmail.com", TipoEmail[0]), new Endereco("Rua dos bobos", 0, 
    "Bairro de Gravatai", "Gravatai", UFs.RS, 987654321), "01/01/2024", "01/01/2040", 1000, "rodrigo_m_rodrigues@gmail.com"),
];

let clt = [
    new CLT("Julia", "32/12/1995", new Email("julia@vortigo.com", TipoEmail[1]), new Endereco("Rua de POA", 100, 
    "Bairro de POA", "Porto Alegre", UFs.RS, 94832040), "10/10/2010", "Lider da Equipe de T&D", 13000, 1001, 12345356),
    new CLT("Lucas", "32/12/2000", new Email("Lucas@vortigo.com", TipoEmail[1]), new Endereco("Rua de POA", 1002, 
    "Bairro de POA", "Porto Feliz", UFs.RS, 94832040), "10/10/2010", "Tech Lead", 10000, 1001, 12345356),
];


let pjs = [
    new PJ("Inteligencia Artificia;", "02/10/2033", new Email("IA_Oficial@gmail.com", TipoEmail[0]), new Endereco("IP: 191.168.000-00", 0, 
    "Dentro da nuve,", "Internet", UFs.SP, 12345677), "01/01/2024", "01/01/2040", 150, 120, "mark_zuckemberg@facebook.com")
];

let ogitrovAnalog = new Empresa(
    estagiarios,
    clt,
    pjs
);

ogitrovAnalog.adicionarProjeto("Atacadão", 200000);

ogitrovAnalog.adicionarFuncionarioAoProjeto(ogitrovAnalog.projetos[0], [ogitrovAnalog.estagiarios[1], 
    ogitrovAnalog.clts[0], ogitrovAnalog.pjs[0]]);

console.log(ogitrovAnalog.calcularLucroMensal());

