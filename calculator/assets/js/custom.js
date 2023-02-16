let numers = document.querySelectorAll("#calbtn");
let sepchar = document.querySelectorAll("#sepchar");
let result = document.getElementById("result");
let equalTo = document.getElementById("equalTo");
let clear = document.getElementById("clear");
let del = document.getElementById("delete");
let opraters = ["+", "-", "/", "*", "."];
let nonFirstInputs = ["+", "/", "*", "."];
let value = "";

sepchar.forEach((sepchar, index) => {
  sepchar.addEventListener("click", function () {
    let oprater = this.innerHTML;
    // only minus  on first input
    if (!nonFirstInputs.includes(oprater) && !value.length > 0) {
      value += oprater;
      result.innerHTML = value;
      console.log(value);
    } else if (value.length >= 0) {
      let lastOprater = value.charAt(value.length - 1);
      let index = value.length-1;
      // console.log(index);
      if (opraters.includes(lastOprater)) {
        let replaced = value.slice(0, -1);
        replaced += oprater;
        // console.log(replaced);
        value = replaced;
        result.innerHTML = replaced;
      } else {
        value += oprater;
        result.innerHTML = value;
      }
    }
  });
});

numers.forEach((numers, index) => {
  numers.addEventListener("click", function () {
    let text = this.innerHTML;
    value += text;
    result.innerHTML = value;
  });
});

equalTo.addEventListener("click", function () {
  if (result.innerHTML != "") {
    let lastChar = result.innerHTML.charAt(result.innerHTML.length - 1);
    if (!opraters.includes(lastChar)) {
      result.innerHTML = eval(result.innerHTML);
      value = eval(result.innerHTML);
    } else if (opraters.includes(lastChar)) {
      let removeLast = result.innerHTML.slice(0, -1);
      result.innerHTML = eval(removeLast);
      value = eval(removeLast);
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "please enter a Number!",
    });
  }
});

clear.addEventListener("click", function () {
  result.innerHTML = "";
  value = "";
});

del.addEventListener("click", function () {
  result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
  value = result.innerHTML;
});
