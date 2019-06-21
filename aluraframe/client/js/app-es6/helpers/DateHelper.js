export class DateHelper {

    constructor(){
        throw new Error('Essa classe não pode ser instanciada.');
    }

    static textoParaData(texto){
        if(!/\d{2}\/\d{2}\/\d{4}$/.test(texto))
            throw new Error('A data informada deve estar no formato dd/mm/aaaa.')
        return new Date(...texto.split('/').reverse().map((data, indice) => data - indice % 2));
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}