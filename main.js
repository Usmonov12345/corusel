let hero = document.querySelector("#hero")
let box = document.querySelector("#box")
let img1 = document.querySelector("#img1")
let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let span1 = document.querySelector("#span1")
let span2 = document.querySelector("#span2")
let span3 = document.querySelector("#span3")


// box.style.transform = "translateX("+400+"px)";


let mac = 0
btn2.addEventListener("click", () => {
  if(mac == -800){
    btn2.type.disabled
  }
  else{
    box.style.transform= `translateX(${mac-=400}px)`

  }
  });
  btn1.addEventListener("click", () => {
    if(mac== 0){
      btn2.type.disabled
    }
    else{
      box.style.transform= `translateX(${macB+=400}px)`
  
    }

  });

  let macB = 0


  span1.addEventListener("click", () => {
    if(mac == -800){
      span3.type.disabled
    }
    else{
      box.style.transform= `translateX(${macB+0}px)`
  
    }
    });
span2.addEventListener("click", () => {
  if(macB == -800){
    span2.type.disabled
  }
  else{
    box.style.transform= `translateX(${macB-400}px)`

  }
  });

  span3.addEventListener("click", () => {
    if(mac == -800){
      span3.type.disabled
    }
    else{
      box.style.transform= `translateX(${macB-800}px)`
  
    }
    });
 







