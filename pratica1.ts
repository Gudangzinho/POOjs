// SINTAXE TYPESCRIPT
/*
class nomeDaClase {
    //variaveis
    //metodos construtores
    //funções
*/


class Estudante {
    chamada: number;     // VARIAVEIS
    nome: string;

    constructor(chamada: number, nome: string) {     // MéTODO CONSTRUTOR
        this.chamada = chamada;
        this.nome = nome;
    }

    mostrarInformacoes(): void{     // void é pra retornar limpinho
        console.log("Nome: " + this.nome + ", Número da chamada: " + this.chamada)
    }

    

}
var fun: Estudante = new Estudante(20, "Igor");
fun.mostrarInformacoes();