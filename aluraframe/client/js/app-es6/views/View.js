class  View {
   
    constructor(elemento){
        this._elemento = elemento;
    }

    template(){
        throw new Error('Esse método precisa ser implementado nas classes filhas.');
    }

    update(model){
        return this._elemento.innerHTML = this.template(model);
    }

}