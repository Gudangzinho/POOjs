//ATIVIDADE 3
//Crie uma classe produto eletrônico e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto produto eletrônico, defina as instâncias deste objeto e apresente as informações deste objeto no console.


class Produto {
    modelo: string;
    valor: number;

    constructor(modelo: string, valor: number) {
        this.modelo = modelo;
        this.valor = valor;
    }

    mostrarInformacoes(): any {
        console.log("Produto: " + this.modelo + ", valor: " + this.valor + " reais");
    }
}

var res: Produto = new Produto("Samsung s10", 2.349);
res.mostrarInformacoes();