let nodeKeys = [...document.querySelectorAll("kbd")];
let keys = nodeKeys.map(key => key.innerText);

let getSpecificKey = function (event) {
  let keyCode = event.code;

  return keys.includes(keyCode.substr(keyCode.length - 1));
}

document.addEventListener("keydown", event => {
  if (getSpecificKey(event)) {
    new Audio("audio/" + event.key + ".mp3").play();
  }
});
