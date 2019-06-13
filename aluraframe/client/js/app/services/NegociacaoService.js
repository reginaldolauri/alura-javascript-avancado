class NegociacaoService{

    obterNegociacoesDaSemana(cb){
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    JSON.parse(xhr.responseText)
                        .map(objeto =>
                            new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                        );
                } else {
                    console.log(xhr.responseText);
                    this._mensagem.texto = 'Não foi possível obter as negociações do servidor.';
                }
            }
        }

        xhr.send();
    }

}