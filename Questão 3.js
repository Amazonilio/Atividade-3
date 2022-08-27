function calculate() {
  const n = document.getElementById("n").value;
  const output = document.getElementById("res");
  output.value = avaliacao(n);
}



function avaliacao(n) {
  if (n < 38) {
    return [n, "reprovado"];
  } else if (n % 5 > 2) {
    const novaNota = n + 5 - (n % 5)
    return [novaNota, "aprovado"];
  } else {
    return [n, "aprovado"];
  }
}