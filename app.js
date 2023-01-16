const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn")
let number = 0;

btns.forEach((btn)=>{
btn.addEventListener("click",(e)=>{
const styles = e.currentTarget.classList
if (styles.contains("Decrease")){
  number--;
  
}
else if (styles.contains("Increase")){
  number++;
  
}
else{
  number = 0;
  
}
if (number<0){
  value.style.color="red";
}else if(number>0){
  value.style.color="green";
}else{
  value.style.color="white";
}
value.textContent = number;
})

})

