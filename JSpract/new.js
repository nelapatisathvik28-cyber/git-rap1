
 function Value(value) {
    document.getElementById("result").value += value;
  }
function calculate() {
  document.getElementById("result").value = eval(document.getElementById("result").value);
}


  // Clears the result
  function clearResult() {
    document.getElementById("result").value = "";
  }
console.log("index.html")