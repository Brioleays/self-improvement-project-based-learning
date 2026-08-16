
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

