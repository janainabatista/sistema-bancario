var cliente={
    nome:'Janaina',
    login:'janainadutra',
    senha:'1234',
    conta:'456',
    saldo: 10.00
}
  const  Adicionar_dinheiro = function(valor){
  cliente.saldo = cliente.saldo + valor;
  }

  const remover_dinheiro= function(valor){
  cliente.saldo =cliente.saldo - valor;
  }

  const consultar_saldo = function(valor){
  console.log=('Saldo:  ' + cliente.saldo);
   }

   const consulta_cliente = function () {
    console.log('Nome: ' + cliente.nome);
    console.log('login: ' + cliente.login);
    console.log('senha  ' + cliente.senha);
    console.log('conta: ' +cliente.conta);
    console.log('saldo: ' + cliente.saldo);

   }
   
     
    Adicionar_dinheiro(100);
    consultar_saldo();
    remover_dinheiro(50);
    consultar_saldo();
    