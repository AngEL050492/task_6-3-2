btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
radioButtons = document.querySelectorAll('[name = "food"]');
btnElement.addEventListener("click" , function(){
let total = 0;
for (const radioButton of radioButtons){
    if (radioButton.checked){
        total = total + parseInt(radioButton.value);
        }
}
if(total.lenght != 0){
    resultElement.textContent = `${total} р.`;}
    else{
        resultElement.textContent = `0 р.`;
    }

})