// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali

var testo = prompt('Inserisci un testo: ').toLowerCase().split(/[ !-?.,]+/);
var parDaCens = prompt('Inserisci le parole da censurare: ').split(" ");
var counter = 0;
var badWordIndex = 0;

console.log(testo);
console.log(parDaCens);

  function censuratore(text,wordToCens) {
    for (var i = 0; i < text.length; i++) {
      if (wordToCens.includes(text[i])) {
        text[i] = "xxx";
        counter++;
      }
    }
  }

censuratore(testo,parDaCens);

badWordIndex = (counter / testo.length);

document.writeln(testo.join(" "));
console.log("Parole censurate: " + counter);
console.log("Badword index: " + badWordIndex.toFixed(2));
