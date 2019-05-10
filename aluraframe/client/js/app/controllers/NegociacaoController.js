class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault()
        let listaNegociacoes = new ListaNegociacoes();
        listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade = 0;
        this._inputValor = 0.0;
        this._inputData.focus();
    }
}