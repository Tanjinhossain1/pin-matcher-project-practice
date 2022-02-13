
function getCode(){
    const code = Math.round(Math.random()*10000);
    const codeString = code + '';
    if(codeString.length == 4){
    document.getElementById('genarate-input').value = codeString;
    }
}
document.getElementById('genarate-button').addEventListener('click',function(){
    getCode()
});
document.getElementById('key-map').addEventListener('click',function(event){
    const calc = event.target.innerText;
   const keyInput = document.getElementById
  ('key-input');
  if(isNaN(calc)){
   if(calc == 'C'){
    keyInput.value = '';
   }}
   else{
    keyInput.value = keyInput.value + calc;
   }
})
function submitButton(){
    const keyInput = document.getElementById('key-input');
    const genarateInput = document.getElementById('genarate-input');
    const seeNot = document.getElementById('see-not');
    const seeYes = document.getElementById('see-yes');
    if(keyInput.value == genarateInput.value){
       seeNot.style.display = 'none'
       seeYes.style.display = 'block'
    }
    else{
        seeYes.style.display = 'none'
        seeNot.style.display = 'block'
    }
}