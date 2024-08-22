let li_el = document.createElement("li");
let li_h2 = document.createElement("h2");
let h2_text = document.createTextNode("а я Узбек");
let li_img = document.createElement("img");
li_pr = document.createElement("p")
pr_p = document.createTextNode("1000 руб")
const ul_list=document.querySelector(".goods__list");
const uling = document.querySelectorAll(".goods__list li")[0];
let staing = false;
let btning = document.createElement("button")
let btntext = document.createTextNode("remove")
btning.appendChild(btntext);
let btnindex = document.querySelector("btn")
const btnNone =document.querySelector("#btnnone");

btning.setAttribute("onclick" , "reming()")



li_h2.appendChild(h2_text);
li_img.src ="img/img3.png";
function egoods()
{ 
  // if( staing == false){
  //   uling.style.display ="none";
  //   staing = true;
  // }
  // else{
  //   uling.style.display = "block";
  //   staing = false;
  // }
 

    ul_list.appendChild(li_el);
    li_el.appendChild(li_h2);
    li_el.appendChild(li_img);
    li_el.appendChild(li_pr);
  uling.classList.toggle("OIL");
  
    btnNone.classList.toggle("btnNone");

  
  ul_list.appendChild(li_pr);
  li_el.appendChild(li_img)
  li_el.appendChild(li_h2)
  li_el.appendChild(btning)

  ul_list.appendChild(li_el);
}
 function reming(){
   egoods.z-
  btning.parentNode.remove();
  uling.classList.remove("OIL")
  btnNone.classList.remove("btnNone");
 }
