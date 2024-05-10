function idade(idade) {
    if (typeof idade !== 'number') {
        return 'Por favor, forneça apenas números como entrada.';
    }

    if (idade >= 16) {
        return 'Parabéns, cadastro efetuado com sucesso!';
    } else {
        return 'Idade não permitida. Procure seus pais!';
    }
}

export default idade;
