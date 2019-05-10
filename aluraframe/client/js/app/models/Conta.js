class Conta {

    constructor(saldo = 0){
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    atualiza(taxa){
        throw new Error('O método atualiza precisa ser implementado pelas classes filhas de Conta.')
    }
}