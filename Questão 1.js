function calculate() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const output = document.getElementById("tri");
    output.value = triangulos(a, b, c);
  }
  
  function triangulos(
    a, b, c
  ) {
    if (a == b && b == c) {
      return "Equilátero";
    } else if (a == b || b == c || c == a) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  }