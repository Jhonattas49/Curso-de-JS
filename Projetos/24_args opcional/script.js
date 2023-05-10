function soma(a,b) {

  if (a === undefined || b ===undefined) {
    console.log("esta função precisa ter os dois argumentos");
    
  }else{
    return a + b;
  }
  
}


console.log(soma(1));
console.log(soma(1,2));  


function sudacao(nome,idade) {
  if (idade === undefined) {
    console.log("Ola"+ nome);
  }else{
    console.log("Ola" + nome + "você tem" + idade + "anos");
  }
  
}

