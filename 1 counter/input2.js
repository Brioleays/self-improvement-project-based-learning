state={
    count:0,
    highScore:0
}
var outPut = document.querySelector('output#numberDisplay');
var highScore = document.querySelector('span.highScore');
var incrementBtn = document.querySelector("button.increment");
var decrementBtn = document.querySelector("button.decrement");
var resetBtn = document.querySelector("button.reset");
var savedHighScore = localStorage.getItem("highScore");
if (savedHighScore !== null) {
    state.highScore = parseInt(savedHighScore);
}

function run(){
    outPut.textContent=state.count
    highScore.textContent = state.highScore
    outPut.classList.remove("text-green-500", "text-yellow-400", "text-orange-500", "text-red-600");
    if (state.count<10) {
        outPut.classList.add("text-green-500");
    } else if (state.count>=10 && state.count<15){
        outPut.classList.add("text-yellow-400");
    }else if (state.count>=15 && state.count<20){
        outPut.classList.add("text-orange-500");
    }else if (state.count===20){
        outPut.classList.add("text-red-600");
    }
}

incrementBtn.addEventListener("click", function () {
    if (state.count<20){
        state.count += 1;
        if (state.count > state.highScore) {
            state.highScore = state.count;
            localStorage.setItem("highScore", state.highScore);
        }
        run();
    }
    
})

decrementBtn.addEventListener("click", function () {
    if (!(state.count===0)){
        state.count -= 1;
        run();
    }
})
resetBtn.addEventListener("click", function(){
    state.count=0;
    run();
})


run()
