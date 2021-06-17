class PrintMachine {
  constructor(fontSize = "14px", fColor = "black", fFamily = "serif", text = "Printed Text") {
    (this.fontSize = fontSize), (this.fColor = fColor), (this.fFamily = fFamily), (this.text = text);
  }
  
  print() {
    let $p = document.createElement("P");
    $p.style.fontSize = `${this.fontSize}px`;
    $p.style.color = `${this.fColor}`;
    $p.style.fontFamily = `${this.fFamily}`;
    $p.textContent = `${this.text}`;
    console.log($p);
    text.appendChild($p);
  }
}

add.addEventListener("click", (event) => {
  event.preventDefault();

  let fS, fC, fF, tA;

  if (fSize.value.trim() == "") {
    fS = undefined;
  }
  else{
      fS = fSize.value
  }

  if (fColor.value.trim() == "") {
    fC = undefined;
  }
  else{
      fC = fColor.value
  }

  if (fFamily.value.trim() == "") {
    fF = undefined;
  }
  else {
      fF = fFamily.value
  }

  if (ta.value.trim() == "") {
    tA = undefined;
  }
  else {
      tA = ta.value.trim()
  }

  let x = new PrintMachine(fS, fC, fF, tA);
  x.print();
});
