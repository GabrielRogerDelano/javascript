class cliente{
    nome;
    cpf;
    
}

class contaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo > valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 = new cliente();
cliente1.nome = "Gabriel";
cliente1.cpf = 11223344556;

const cliente2 = new cliente();
cliente2.nome = "alice";
cliente2.cpf = 10000001;

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.saldo = 120;
contaCorrenteRicardo.agencia = 1001;

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(100)
console.log(contaCorrenteRicardo.saldo);

console.log(cliente1)
console.log(cliente2)