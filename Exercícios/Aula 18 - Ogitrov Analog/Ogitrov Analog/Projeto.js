class Projeto {
    constructor(nome, valorBruto, colaboradoresCLT = [], colaboradoresPJ = [], estagiarios = []) {
        this.nome = nome;
        this.valorBruto = valorBruto;
        this.colaboradoresCLT = colaboradoresCLT;
        this.colaboradoresPJ = colaboradoresPJ;
        this.estagiarios = estagiarios;
    }

    calcularCusto() {
        let custoFolha = 0;

        for (let clt of this.colaboradoresCLT) {
            custoFolha += clt.salario;
        }

        for (let pj of this.colaboradoresPJ) {
            custoFolha += pj.valorHora * pj.quantidadeHorasMinimas;
        }

        for (let estagiario of this.estagiarios) {
            custoFolha += estagiario.valorBolsa;
        }

        return custoFolha;
    }

    calcularLucroMensal() {
        return this.valorBruto - this.calcularCusto();
    }
}

module.exports = {
   Projeto
}