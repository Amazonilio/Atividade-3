function calculate() {
  const a = document.getElementById("a").value
  const b = document.getElementById("b").value
  const c = document.getElementById("c").value
  const output = document.getElementById("res")
  output.value = equacao(a, b, c)
}

function equacao(
  ax2, bx, c
) {
  const delta = Math.pow(bx, 2) - 4*ax2*c
  if (delta < 0 ) {
    return "Delta é negativo"
  } else {
    const roots = []
    roots.push(
      (-bx + Math.sqrt(delta))/(2*ax2)
    )
    roots.push(
      (-bx - Math.sqrt(delta))/(2*ax2)
    )
    return roots
  }

}