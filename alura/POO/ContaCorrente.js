export class contaCorrente{
    agencia;
    cliente;
    // #saldo é um atributo privado, mas alguns sistemas nao aceitam. No lugar de # usam _ 
    _saldo = 0;

    sacar(valor){
        if(this._saldo > valor){
            this._saldo -= valor;
            return valor
        }
    }

    depositar(valor){
        if(valor <= 0) return
        this._saldo += valor
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }
}