import { cliente } from "./Cliente.js";

export class contaCorrente{
    static numeroDeContas = 0
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente 
    }
    // #saldo é um atributo privado, mas alguns sistemas nao aceitam. No lugar de # usam _ 
    _saldo = 0;
    
    get saldo(){
        return this._saldo 
    }

    constructor(agencia, cliente){
        this.agencia = agencia
        this.cliente = cliente
        contaCorrente.numeroDeContas += 1
    }

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