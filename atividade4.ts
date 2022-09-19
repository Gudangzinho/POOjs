//ATIVIDADE 4
//Crie uma classe funcionário e apresente os atributos e métodos referentes esta classe, em seguida crie um objeto funcionário, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class Funcionario {
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }

    mostrarInformacoes(): void {
        console.log("Funcionario: " + this.nome + " " + this.sobrenome + ", idade:" + this.idade + " anos");
    }
}

let abc: Funcionario = new Funcionario("Fandangos", "Silvano", 44)
abc.mostrarInformacoes();