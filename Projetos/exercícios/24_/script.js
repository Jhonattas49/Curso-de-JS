function ChecarTamanhoTexto(param) {
   if (param.length > 10) {
      console.log("texto muito longo");
   }else{
      console.log("texto dentro dos limites");
      console.log(param);
   }
 }


 ChecarTamanhoTexto("Dragon Ball Z: Kakarot é um jogo eletrônico de RPG de ação em mundo aberto desenvolvido pela CyberConnect2 e publicado pela Bandai Namco Entertainment.");
 ChecarTamanhoTexto("Jhon");