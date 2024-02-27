const { Colaborador, Estagiario, CLT, PJ } = require('./Funcionários.js');
const { Projeto } = require("./Projeto.js");

class Empresa {

    constructor(estagiarios, clts, pjs, projetos = []) {
        this.estagiarios = estagiarios;
        this.clts = clts;
        this.pjs = pjs;
        this.projetos = projetos;
    }

    calcularCustoMensalFolha() {
        let custoMensal = 0;

        for (let estagiario of this.estagiarios) {
            custoMensal += estagiario.valorBolsa;
        }

        for (let clt of this.clts) {
            custoMensal += clt.salario;
        }

        for (let pj of this.pjs) {
            custoMensal += pj.valorHora * pj.quantidadeHorasMinimas;
        }

        console.log(custoMensal);
        return custoMensal;
    }

    calcularValorRecebidoMensal() {
        let receitasMensais = 0;
        for (let projeto of this.projetos) {
            receitasMensais += projeto.valorBruto;
        }

        console.log(receitasMensais);

        return receitasMensais
    }

    calcularLucroMensal() {
        return this.calcularValorRecebidoMensal() - this.calcularCustoMensalFolha();
    }

    adicionarProjeto(name, valorBruto) {
        this.projetos.push(new Projeto(name, valorBruto));
    }
    
    adicionarFuncionarioAoProjeto(projeto, funcionarios) {
        for (const funcionario of funcionarios) {
            if(funcionario instanceof Estagiario) {
                projeto.estagiarios.push(funcionario);
            } else if (funcionario instanceof CLT){
                projeto.colaboradoresCLT.push(funcionario);
            }  else if (funcionario instanceof PJ){
                projeto.colaboradoresPJ.push(funcionario);
            }
        }
    }
}

module.exports = {
    Empresa
}