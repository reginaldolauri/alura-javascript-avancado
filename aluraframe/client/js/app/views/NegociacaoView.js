class NegociacaoView {
    
    constructor(seletor){
        this._seletor = seletor;
    }

    update(model){
        return this._seletor.innerHTML = this._template(model);
    }

    _template(model){
        return `
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        ${
                            model.negociacoes.map(neg => {
                                return `
                                        <tr>
                                            <td>${DateHelper.dataParaTexto(neg.data)}</td>
                                            <td>${neg.quantidade}</td>
                                            <td>${neg.valor}</td>
                                            <td>${neg.volume}</td>
                                        </tr>
                                        `
                            })
                        }
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
                `
    }
}

/*

*/