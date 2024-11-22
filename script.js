let count = 0;

let result = document.getElementById("result");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let reset = document.getElementById("reset");

minus.addEventListener("click", function(){
    count--;
    result.innerText = count;
});

plus.addEventListener("click", function(){
    count++;
    result.innerText = count;
});

reset.addEventListener("click", function(){
    count = 0;
    result.innerText = count;
})