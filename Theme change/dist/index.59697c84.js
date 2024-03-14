let btnElem = document.querySelector(".btn");
let bodyElem = document.body;
let isWhite = false;
btnElem.addEventListener("click", ()=>{
    console.log("button click");
    if (!isWhite) bodyElem.style.backgroundColor = "yellow";
    else bodyElem.style.backgroundColor = "";
    isWhite = !isWhite;
});

//# sourceMappingURL=index.59697c84.js.map
