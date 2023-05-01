//abre comunicação com outras api
import {cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"

//inicializa os primeiros clientes
const cliente1 = new cliente("Ricardo", 11223344556);
const cliente2 = new cliente('Aline', 10000100010)

//inicializa a conta do cliente
const conta1 = new contaCorrente(1001, cliente1);
const conta2 = new contaCorrente(101, cliente2)


//acoes
//obs: a ordem importa
conta1.depositar(500)
conta1.transferir(200, conta2)

console.log(conta1)
console.log(conta2)