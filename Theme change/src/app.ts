let btnElem = document.querySelector('.btn') as HTMLButtonElement;
let bodyElem : HTMLElement = document.body;

let isWhite : boolean = false;

btnElem.addEventListener("click" , () : void =>{
    console.log("button click");
    if(!isWhite){
        bodyElem.style.backgroundColor = "yellow"
    }else{
        bodyElem.style.backgroundColor = "";
    }
    isWhite = !isWhite;
})