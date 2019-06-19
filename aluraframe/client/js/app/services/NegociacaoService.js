class NegociacaoService{

    constructor(){
        this._http = new HttpService();
    }

    obterNegociacoesDaSemana(){
        return this._http.get('negociacoes/semana')
                .then(negociacoes => {
                    return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                })
                .catch(erro => {
                    console.log(erro);
                    throw new Error(this._mensagem.texto = 'Não foi possível obter as negociações da semana.');
                });
    }

    obterNegociacoesDaSemanaAnterior(){
        return this._http.get('negociacoes/anterior')
                .then(negociacoes => {
                    return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                })
                .catch(erro => {
                    console.log(erro);
                    throw new Error(this._mensagem.texto = 'Não foi possível obter as negociações da semana anterior.');
                });
    }

    obterNegociacoesDaSemanaRetrasada(){
        return this._http.get('negociacoes/retrasada')
                .then(negociacoes => {
                    return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                })
                .catch(erro => {
                    console.log(erro);
                    throw new Error(this._mensagem.texto = 'Não foi possível obter as negociações da semana retrasada.');
                });
    }

    obterNegociacoes() {
        return Promise.all([this.obterNegociacoesDaSemana(),
                     this.obterNegociacoesDaSemanaAnterior(),
                     this.obterNegociacoesDaSemanaRetrasada()])
                 .then(periodos => {
                    let negociacoes = periodos
                                            .reduce((arrayAchatado, array) => arrayAchatado.concat(array),[]);
                     
                    return negociacoes;
                })
                 .catch(erro => {
                    throw new Error(erro)
                });        
     }

     cadastra(negociacao){
         return ConnectionFactory
                .getConnection()
                .then(connection => new NegociacaoDao(connection))
                .then(dao => dao.adiciona(negociacao))
                .then(() => 'Negociação cadastrada com sucesso')
                .catch(erro => {
                    console.log(erro)
                    throw new Error('Não foi possível adicionar a negociação.');
                });
     }

     apaga(){
        return ConnectionFactory
                    .getConnection()
                    .then(connection => new NegociacaoDao(connection))
                    .then(dao => dao.apagaTodos())
                    .then(() => 'Negociações apagadas com sucesso.')
                    .catch(erro => {
                        console.log(erro);
                        throw new Error('Não foi possível apagar as negociações.')
                    });
     }

     lista(){
         return ConnectionFactory
                    .getConnection()
                    .then(connection => new NegociacaoDao(connection))
                    .then(dao => dao.listaTodos())
                    .catch(erro => {
                        console.log(erro);
                        throw new Error('Não foi possível obter as negociações.')
                    });
     }
}