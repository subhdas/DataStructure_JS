import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

document.createElement("div");

//MY DEBOUNCE FUNC......
let inp = document.querySelector("input");
let changeprocess = true;
inp.addEventListener("keyup", (e) => {
  if (!changeprocess) return;
  setTimeout(() => {
    changeprocess = true;
  }, 3000);

  changeprocess = false;
  // console.log(" input change ", e, e.target.value);
});
//MY DEBOUNCE FUNC......

function something(some = "well", num, time) {
  console.log("args ", arguments);
}

// var fapply = (fun, args) => fun(...args);

something("hehe", 100, { haha: 1 });

// fapply(something, ["wow", "hehehhee", 2]);

function debounce(func, timeout) {
  let runfunc = true;
  return function (args) {
    if (!runfunc) return;
    runfunc = false;
    func(...args);
    setTimeout(() => {
      runfunc = true;
    }, timeout);
  };
}

function runit(some = "hehe") {
  console.log("keydown happending ", some);
}

function debounce2(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

let dev = debounce(runit, 2000);

inp.addEventListener("keydown", (e) => {
  dev([e.target.value]);
  // debounce2(runit, 5000)()
  // runit();
});
