// console.log("привет");
// let number = 7;

// let str="не пока "
// console.log(str);
// number = 6;
// console.log(number);
// const myConst="Это  нельзя поменять";
// const	foundTag = document.querySelector('div');
// const	foundId = document.querySelector('#product');
// const	foundClass = document.querySelector('.product__title');
// foundClass.innerText ="Test";
// foundClass.style.color = "red";
// foundClass.style.backgroundColor="black";



const buttonTag = document.querySelector (".product__btn");
const priceTag = document.querySelector(".product__price");
const titleTag = document.querySelector(".product__title");
let flagTitle= false;
let flagSell = false;
let buttonSell = false;
let basketCost = document.querySelector(".cost");
let bunk = 0;

 function buttonTitle(){
	if(!buttonSell){
		buttonTag.innerText ="В корзине";
		buttonTag.style.backgroundColor="lime";
		buttonSell=true;
		bunk = bunk+ priceTag.innerHTML;

	}
	else{
		buttonTag.innerText = "купить";
		buttonTag.style.backgroundColor="silver";
		buttonSell=false;
		bunk = bunk - priceTag.innerHTML;
	}
     basketCost.innerHTML= bunk;
 }
function colorTitle(){


	// if(!flagTitle ){
	//     titleTag.classList.add("color-title");
	// 	flagTitle = true;
	// }
	// else{
	// 	titleTag.classList.remove("color-title");
	// 	flagTitle = false;
	// }
  titleTag.classList.toggle("color-title");


}


function getSell(){
	if(!flagSell){
  priceTag.innerText = " ты забайчен теперь ты мне должен three handred backs 300$";
  flagSell= true;
 }
	else{
	priceTag.innerText="500р";
	flagSell = false;
 }
}



 
