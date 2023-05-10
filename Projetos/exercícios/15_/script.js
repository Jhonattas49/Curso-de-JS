
let vm = 41;
let divisoes = 0;

for (let i = 1;i  <= vm; i++) {
    if ( vm  % i == 0) {
        divisoes++;
        
    }

    if (divisoes == 2) {
        console.log(`O numero ${vm} é primo`)
        
    }else{
        console.log(`O numero ${vm} não é primo`)
    }
}
