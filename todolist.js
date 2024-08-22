let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let clist = document.createElement("li");
  clist.innerHTML = "<strong>" + inp.value + "</strong>";

  let del = document.createElement("button");
  del.innerText = "delete";
  del.classList.add("delete");
  clist.appendChild(del);

  let done = document.createElement("button");
  done.classList.add("done");
  done.innerText = "done";
  clist.appendChild(done);

  ul.appendChild(clist);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentNode.remove();
  }
  if (event.target.classList.contains("done")) {
    let parentelement = event.target.parentNode;
    parentelement.classList.add("strike");
  }
});
