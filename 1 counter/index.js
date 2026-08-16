// colors for each stages should be green for 10 and below
// colors for each stages should be yellow for 10 to 14
// colors for each stages should be orange for 15 to 19
// colors for each stages should be red for exactly 20
// button should have active state

var outPut = document.querySelector('output#numberDisplay');
var value = number(outPut.textContent);
var resetValue = 0;
var incrementBtn = document.querySelector("button.increment");
var decrementBtn = document.querySelector("button.decrement");
var resetBtn = document.querySelector("button.reset");

incrementBtn.addEventListener("click", function(){
    if (value===0 || value<21){
        value += 1;
        outPut.textContent=value;
    }else{
        alert("reset");
    }    
})
decrementBtn.addEventListener("click", function(){
    if (value===0 || value<21){
        value -= 1;
        outPut.textContent=value;
    }else{
        alert("reset");
    }    
})
resetBtn.addEventListener("click", function(){
     outPut.textContent=resetValue;
})



