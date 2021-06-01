// !  Our Story Title is "Steal Or Stop!"
const storyTitle = "Steal Or Stop: A tale of power and code";
console.log(storyTitle);
// * add an h1 to our html page, then put our title into it.
let pageBody = document.querySelector("body");
let storyTitleTag = document.createElement("h1");
storyTitleTag.innerText = storyTitle;
pageBody.appendChild(storyTitleTag);

/**
 * !Our Characters!
 * * charater #1 - a famous tough hedonist
 * * character #2 - an undead and peaceful corporate boss
 * 
 * !Our Plot
 * * want to stop the theft of 
 * * a fallen unnerving drug
 * 
 * !Our Conflict
 * * an unethical corp will gain a monopoly
 */
let char1Name = "Blade Chuck-Smoke";
let char1Age = 420;
let char1Undead = true;
let char1Posessions = ["Souls", "cellphone", "pocket watch", "blades", "bottle of tears", "compound bow", "quiver of arrows"];
// will order suya
function callForFood(phoneNumber,whatToOrder,address,payment,timing){
    //call for food instructions here
    let phoneText = `I am phoning from ${phoneNumber}`; 
    console.log(phoneText);
    let phoneLog = document.createElement("p");
    phoneLog.innerText = phoneText;
    pageBody.appendChild(phoneLog);
    let orderText;
    if(whatToOrder.length==1){
        orderText = `I just want a dainty meal of ${whatToOrder[0]}`;
    }else if(whatToOrder.length>1 && whatToOrder.length<5){
        orderText = "I am soooo hungry!  I want a mad meal!";
    }else{
        orderText = "No calory counting for!  Bring it on!";
    }
    console.log(orderText);
    for(let i=0;i<whatToOrder.length;i++){
        let myFood = document.createElement("p");
        myFood.innerText = whatToOrder[i];
        pageBody.appendChild(myFood);
    }
}
callForFood(5555555555,["goat","plantain","hot sauce","slaw", "ginger beer"],"5 Bork Street","cash","less than five minutes");
