function calculate () {
 const n = document.getElementById("int").value;
 const output = document.getElementById("res");
 output.innerText = LuidyMoura(+n);

}
function LuidyMoura(n) {
  let res = [];

  for (let i = 1; i < (n + 1); i++) {
    if (i % 5 === 0 && i % 9 === 0) {
      res.push("LuidyMoura");
    } else if (i % 5 === 0) {
      res.push("Luidy");
    } else if (i % 9 === 0) {
      res.push("Moura");
    } else {
      res.push(i);
    }
  }

  return res.join(", ");
}