```
html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>simon game</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style type="text/tailwindcss">
            @layer utilities {
                .yellowPressed {
                    @apply shadow-2xl shadow-yellow-300 bg-yellow-300
                }
                .redPressed {
                    @apply shadow-2xl shadow-red-300 bg-red-300
                }
                .bluePressed {
                    @apply shadow-2xl shadow-blue-300 bg-blue-300
                }
                .greenPressed {
                    @apply shadow-2xl shadow-green-300 bg-green-300
                }
                .disabled{
                    @apply bg-gray-500 cursor-not-allowed;
                }
                .active{ 
                    @apply hover:bg-gray-800 text-white cursor-default;
                }
                @keyframes flash-red {
                    0%   { background-color: red; }
                    50%  { background-color: darkred; }
                    100% { background-color: red; }
                }
                .game-over {
                    animation: flash-red 0.5s ease 3;
                }
            }
        </style>
</head>
<body>
    <header></header>
    <article>
        <main class="flex flex-col items-center justify-center min-h-screen gap-6">
            <h1 id="stateMessage" aria-live="polite" class="text-6xl font-bold">Press Start</h1>
            <section id="determinants" class="flex gap-8 text-3xl font-semibold">
                <div class="scoreContainer">
                    <label for="score">score:</label>
                    <output id="score" aria-live="polite" aria-atomic="true">0</output>
                </div>
                <div class="bestContainer">
                    <label for="best">best:</label>
                    <output id="best" aria-live="polite" aria-atomic="true">0</output>
                </div>
            </section>
            <section id="color-buttons" class="grid grid-cols-2 gap-4">
                <button class="yellowButton w-32 h-32 rounded-lg text-lg font-bold bg-yellow-500 hover:shadow-xl hover:shadow-yellow-300/80 hover:bg-yellow-300" data-panel-index="0">
                    Yellow 
                </button>
                <button class="redButton w-32 h-32 rounded-lg text-lg font-bold bg-red-500 hover:shadow-xl hover:shadow-red-300/80 hover:bg-red-300" data-panel-index="1">
                    Red 
                </button>
                <button class="blueButton w-32 h-32 rounded-lg text-lg font-bold bg-blue-500 hover:shadow-xl hover:shadow-blue-300/80 hover:bg-blue-300" data-panel-index="2">
                    Blue 
                </button>
                <button class="greenButton w-32 h-32 rounded-lg text-lg font-bold bg-green-500 hover:shadow-xl hover:shadow-green-300/80 hover:bg-green-300" data-panel-index="3">
                    Green 
                </button>
            </section>
            <section id="button-container" class="flex gap-4 mt-4">
                <button class="startBtn bg-black text-white p-4 rounded-xl" data-action="start">Start</button>
                <button class="resetBtn bg-black text-white p-4 rounded-xl hidden" data-action="reset">Play Again</button>
            </section>
        </main>
    </article>
    <script src="./index.js"></script>
</body>
</html>
```
```
js

state={
    gameStatus:'idle', //idle, displaying, input, gameover
    pattern:[], //Array of panel indices e.g. [0,2,1,3,1]
    playerInput:[], //what the player has clicked so far
    currentDisplayStep: 0, //which step of the pattern is currently being shown
    currentInputStep:0, // which step the player need to mtch next
    score:0, //current game score (length of pattern completed)
    highScore: 0, //persistent high score (localStorage)
    flashPanel: null, //Which panel index is currently lit(null if none)
    message: 'Press Start', //status message shown to player
    isInteractive:false //Whether panels accept clicks right now
};

var statusMessageOutput = document.querySelector('main h1#stateMessage');
var score = document.querySelector('.scoreContainer output#score');
var bestScore = document.querySelector('.bestContainer output#best');
var yellowPanel=document.querySelector('#color-buttons .yellowButton');
var redPanel=document.querySelector('#color-buttons .redButton');
var bluePanel=document.querySelector('#color-buttons .blueButton');
var greenPanel=document.querySelector('#color-buttons .greenButton');
var startBtn = document.querySelector('#button-container .startBtn')
var panel=[yellowPanel, redPanel, bluePanel, greenPanel];
var savedHighScore = localStorage.getItem("simonHighScore");
var colorButtons = document.querySelector("#color-buttons");
var resetBtn = document.querySelector("#button-container .resetBtn")

if (savedHighScore !== null) {
    state.highScore = parseInt(savedHighScore);
}

function run(){
    // Update text
    statusMessageOutput.textContent = state.message;
    bestScore.textContent = state.highScore;
    score.textContent = state.score;

    // Step 1: Wipe all panels clean
    panel.forEach(function(btn) {
        btn.classList.remove("yellowPressed", "redPressed", "bluePressed", "greenPressed", "disabled");
    });

    // Step 2: Apply based on gameStatus
    if (state.gameStatus === "idle") {
        startBtn.classList.remove("hidden"); 
        resetBtn.classList.add("hidden"); 
        colorButtons.classList.remove("game-over");
        panel.forEach(function(btn) {
            btn.classList.add("disabled");
        });
    } else if (state.gameStatus === "displaying") {
        startBtn.classList.add("hidden"); 
        resetBtn.classList.add("hidden"); 
        colorButtons.classList.remove("game-over");
        // Dim all panels first
        panel.forEach(function(btn) {
            btn.classList.add("disabled");
        });
        // Then light up the one that's flashing
         if (state.flashPanel !== null) {
        var flashIndex = state.flashPanel;
        var pressedClasses = ["yellowPressed", "redPressed", "bluePressed", "greenPressed"];
        panel[flashIndex].classList.remove("disabled");
        panel[flashIndex].classList.add(pressedClasses[flashIndex]);
    }
    } else if (state.gameStatus === "input") {
        startBtn.classList.add("hidden"); 
        resetBtn.classList.add("hidden");
        // All panels active, nothing to add
    } else if (state.gameStatus === "gameover") {
        startBtn.classList.add("hidden"); 
        resetBtn.classList.remove("hidden"); 
        colorButtons.classList.add("game-over");
        panel.forEach(function(btn) {
            btn.classList.add("disabled");
        });
        
    }
}

resetBtn.addEventListener("click", function(){
    if (state.gameStatus==='gameover' ){       
        state.pattern=[]
        state.playerInput=[]
        state.score=0
        state.gameStatus='displaying'
        var firstPanel=Math.floor(Math.random()*4)
        state.pattern.push(firstPanel)
        state.message="Watch the pattern";
        state.isInteractive=false
        displayingPattern()
        
    }
    
})

startBtn.addEventListener("click", function(){
    if (state.gameStatus==='idle'||state.gameStatus==='gameover' ){
        
        state.pattern=[]
        state.playerInput=[]
        state.score=0
        state.gameStatus='displaying'
        var firstPanel=Math.floor(Math.random()*4)
        state.pattern.push(firstPanel)
        state.message="Watch the pattern";
        state.isInteractive=false
        displayingPattern()
        
    }
    
})
function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function displayingPattern() {
    
    state.isInteractive = false;
    state.gameStatus = 'displaying';
    state.currentDisplayStep = 0;
    
    for (var i = 0; i < state.pattern.length; i++) {
        state.currentDisplayStep = i;
        state.flashPanel = state.pattern[i];
        run();
        await delay(600);
        
        state.flashPanel = null;
        run();
        await delay(300);
       
    }
    
    state.gameStatus = 'input';
    state.isInteractive = true;
    state.message = 'Your turn';
    state.currentInputStep = 0;
    state.playerInput = [];
    run();
}
colorButtons.addEventListener("click", function(event) {
    // 1. If not interactive, do nothing
    if (!state.isInteractive) {
        return;
    }
    
    // 2. Get the clicked panel. Use event.target.
    //    But what if they click the text inside the button?
    //    Use .closest('[data-panel-index]') to find the button.
    var clickedPanel=event.target.closest('[data-panel-index]');
    // 3. Get the panel index from data-panel-index
    var clickedPanelValue=clickedPanel.getAttribute('data-panel-index');
    // 4. Push it into state.playerInput
    state.playerInput.push(Number(clickedPanelValue));
    var lastInput = state.playerInput[state.playerInput.length - 1];
    var expectedValue= state.pattern[state.currentInputStep];
    // 5. Compare with state.pattern[state.currentInputStep]
    
    // 6. If match:
    //    - Increment currentInputStep
    //    - If sequence complete: increase score, update highScore, 
    //      generate new panel, push to pattern, reset input, 
    //      call displayingPattern()
    //    - If not complete: just call run()
    if (lastInput === expectedValue) {
    // Correct!
    state.currentInputStep++;
    
    if (state.playerInput.length === state.pattern.length) {
        // Sequence complete!
        state.score++;
        if (state.score > state.highScore) {
            state.highScore = state.score;
            localStorage.setItem("simonHighScore", state.highScore);
        }
        var nextPanel = Math.floor(Math.random() * 4);
        state.pattern.push(nextPanel);
        state.playerInput = [];
        state.currentInputStep = 0;
        state.gameStatus = 'displaying';
        state.message = 'Watch the pattern...';
        state.isInteractive = false;
        run();
        displayingPattern();
    } else {
        // Still more steps to match
        run();
    }
} else {
    // Wrong panel!
    state.gameStatus = 'gameover';
    state.message = 'Game Over! Score: ' + state.score;
    state.isInteractive = false;
    run();
}
// 7. If mismatch: game over
});
run()


``` 

```
post mortem

* my front end has gotten rusty because it has been long i wrote tailwind and css but this mad me to start remebering them; it is getting better
* i don't know much about teminologies that exist like the minimum touch target but i tried to implement it using box model; i am learning them but there are more terminologies aside from minimum touch target and it will be good if i can get to know it
* i have along way to go to match up with the dream i have for myself and plans too if i am struggling with this; it is still long but there is hope
* i had a problem understanding render function but i could quickly catch up; i can get it now but in this progect the alot of new things i used the likes of target, closest, the way we put flas index in there and all like that 
* i had a problem with updating the dom directly when i started i didn't create a state that will help with that; i didn't repeat this mistake tho i still had alot of proble working on this without encoutering some bugs or hold up that i didn't know though you solve this for me by providing step but it is not all steps i could follow through with and not all i could do without you input or asking for the way forward
* async fetch and await is a problem just like how local storage was a problem 
* it is still rusty i felt like i could easily understand some things only if you explained them because i had previous knowledge on it
```