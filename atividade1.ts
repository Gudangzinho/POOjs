class Cliente {
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }

    mostrarInformacoes(): void {
        console.log("Cliente:" + this.nome + " " + this.sobrenome + ", idade:" + this.idade + " anos");
    }
}

let abc: Cliente = new Cliente("Igor", "Nascimento Pereira", 25)
abc.mostrarInformacoes();