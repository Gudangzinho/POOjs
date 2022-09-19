//ATIVIDADE 2
//Crie uma classe avião e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto avião, defina as instâncias deste objeto e apresente as informações deste objeto no console.


class Aviao {
        modelo: string;
        ano: number;
        valor: number;
        numeroPassageiros: number;

        constructor(modelo: string, ano: number, valor: number, numeroPassageiros: number) {
            this.modelo = modelo;
            this.ano = ano;
            this.valor = valor;
            this.numeroPassageiros = numeroPassageiros;
        }

        mostrarInformacoes(): any {
            console.log("Avião modelo: " + this.modelo + ", fabricado no ano: " + this.ano + ", custando a quantia de US$ " + this.valor + " milhões, podendo transportar o total de " + this.numeroPassageiros + " passageiros.");
        
    }
}

let res: Aviao = new Aviao("Boeing 787-9", 2022, 264, 246)
res.mostrarInformacoes();