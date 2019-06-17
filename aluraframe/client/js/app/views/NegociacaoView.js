class NegociacaoView extends View {
    
    constructor(elemento){
        super(elemento);
    }

    template(model){
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
                            }).join('')
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="3">Volume Total</th>
                            <td>${model.volumeTotal}</td>
                        </tr>
                    </tfoot>
                </table>
                `
    }
}