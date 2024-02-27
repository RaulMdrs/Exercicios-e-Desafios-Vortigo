const { Email, Endereco, UFs} = require('./Utils');

class Colaborador {
    constructor(nome, dataNascimento, emails, endereco) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.emails = emails;
        this.endereco = endereco;
    }
}

class Estagiario extends Colaborador {
    constructor(nome, dataNascimento, emails, endereco, dataContratacao, dataFinalContrato, valorBolsa, chavePix) {
        super(nome, dataNascimento, emails, endereco);
        this.dataContratacao = dataContratacao;
        this.dataFinalContrato = dataFinalContrato;
        this.valorBolsa = valorBolsa;
        this.chavePix = chavePix;
    }
}

class CLT extends Colaborador {
    constructor(nome, dataNascimento, emails, endereco, dataContratacao, cargo, salario, agenciaContaSalario, numeroContaSalario) {
        super(nome, dataNascimento, emails, endereco);
        this.dataContratacao = dataContratacao;
        this.cargo = cargo;
        this.salario = salario;
        this.agenciaContaSalario = agenciaContaSalario;
        this.numeroContaSalario = numeroContaSalario;
    }
}

class PJ extends Colaborador {
    constructor(nome, dataNascimento, emails, endereco, dataContratacao, dataFinalContrato, valorHora, quantidadeHorasMinimas, chavePix) {
        super(nome, dataNascimento, emails, endereco);
        this.dataContratacao = dataContratacao;
        this.dataFinalContrato = dataFinalContrato;
        this.valorHora = valorHora;
        this.quantidadeHorasMinimas = quantidadeHorasMinimas;
        this.chavePix = chavePix;
    }
}


module.exports = {
    Colaborador,
    Estagiario,
    CLT,
    PJ
}