function moverPonto(instrucoes) {
    // Inicializa as coordenadas x e y
    let x = 0;
    let y = 0;

    // Itera sobre as instruções
    for (let i = 0; i < instrucoes.length; i++) {
        // Atualiza as coordenadas de acordo com a instrução
        switch (instrucoes[i]) {
            case 'Norte':
                y++;
                break;
            case 'Sul':
                y--;
                break;
            case 'Leste':
                x++;
                break;
            case 'Oeste':
                x--;
                break;
            default:
                console.log('Instrução inválida:', instrucoes[i]);
        }
    }

    // Retorna o ponto final como um objeto
    return { x: x, y: y };
}

// Exemplo de uso
let instrucoes = ['Sul', 'Sul', 'Sul', 'Norte', 'Leste', 'Oeste', 'Leste', 'Leste'];
let pontoFinal = moverPonto(instrucoes);
console.log('Posição final:', pontoFinal); // Deve exibir { x: -1, y: -1 }
