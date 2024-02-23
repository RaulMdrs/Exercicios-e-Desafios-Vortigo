function avaliarExpressao(expressao) {
    const pilha = [];
    const tokens = expressao.split(' ');

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        
        if (!isNaN(token)) { // Verifica se é um número
            pilha.push(parseFloat(token));
        } else { // É um operador
            const operand2 = pilha.pop();
            const operand1 = pilha.pop();
            
            switch (token) {
                case '+':
                    pilha.push(operand1 + operand2);
                    break;
                case '-':
                    pilha.push(operand1 - operand2);
                    break;
                case '*':
                    pilha.push(operand1 * operand2);
                    break;
                case '/':
                    pilha.push(operand1 / operand2);
                    break;
                default:
                    console.log('Operador inválido:', token);
            }
        }
    }

    return pilha.pop();
}

// Exemplo de uso
const expressao = "5 3 4 + *";
const resultado = avaliarExpressao(expressao);
console.log('Resultado:', resultado); // Deve exibir 35