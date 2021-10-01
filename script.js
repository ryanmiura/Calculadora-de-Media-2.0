function Calcular() {
  var nomeElementoInput = document.getElementById("nome")
  var stringNomeInput = nomeElementoInput.value
  
  var notaPBElementoInput = document.getElementById("notaPrimeiroBimestre")
  var stringPBInput = notaPBElementoInput.value
  var floatPBInput = parseFloat(stringPBInput)
  
  var notaSBElementoInput = document.getElementById("notaSegundoBimestre")
  var stringSBInput = notaSBElementoInput.value
  var floatSBInput = parseFloat(stringSBInput)

  var notaTBElementoInput = document.getElementById("notaTerceiroBimestre")
  var stringTBInput = notaTBElementoInput.value
  var floatTBInput = parseFloat(stringTBInput)

  var notaQBElementoInput = document.getElementById("notaQuartoBimestre")
  var stringQBInput = notaQBElementoInput.value
  var floatQBInput = parseFloat(stringQBInput)
  
  var notaFinal = (floatPBInput+floatSBInput+floatTBInput+floatQBInput)/4
  var notaFixada = notaFinal.toFixed(1)

  var elementoNotaCalculada = document.getElementById("notaCalculada")


  if(notaFixada > 6) {
    var mensagemNotaCalculada_1 = stringNomeInput+" sua nota é " + notaFixada+", você está aprovado."
    elementoNotaCalculada.innerHTML = mensagemNotaCalculada_1
  }
  else if(notaFixada < 6) {
    var mensagemNotaCalculada_2 = stringNomeInput+" sua nota é "+notaFixada+", você está reprovado."
    elementoNotaCalculada.innerHTML = mensagemNotaCalculada_2
  }

}