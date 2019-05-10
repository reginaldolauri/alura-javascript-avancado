class Codigo {

    constructor(codigo){
        this._codigo = codigo;
        if (!this._valida()) {
            throw new Error(`O texto ${codigo} não é um código válido.`)
        }
    }

    _valida(){
        if(/\D{3}-\D{2}-\d{2}/.test(this._codigo))
            return 'Código válido';
    }

    get codigo(){
        return codigo;
    }

}