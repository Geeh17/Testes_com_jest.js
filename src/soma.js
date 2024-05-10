function soma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error('Por favor, forneça apenas números como argumentos.');
    }
    if (a < 0 || b < 0) {
        throw new Error('A função soma não aceita números negativos.');
    }
    if (a + b > 1000) {
        throw new Error('A soma dos números não pode ultrapassar 1000.');
    }
    return a + b;
}

export default soma;
