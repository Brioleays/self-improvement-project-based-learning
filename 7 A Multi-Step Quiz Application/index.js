var state = {
    status: 'loading',
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    selectedAnswer: null
};

var loadingView = document.querySelector("#loading-view");
var playingView = document.querySelector("#playing-view");
var finalView = document.querySelector("#finished-view");
var questionsContainer = document.querySelector("#playing-view #question-text")
var optionsContainer = document.querySelector("#options-container");
var nextQuestion = document.querySelector("#next-btn");
var finalScoreText = document.querySelector("#final-score");

function render() {
    if (state.status === "loading") {
        loadingView.classList.remove("hidden");
        playingView.classList.add("hidden");
        finalView.classList.add("hidden");
    }
    if (state.status === "playing") {
        playingView.classList.remove("hidden");
        loadingView.classList.add("hidden");
        finalView.classList.add("hidden");
        var displayedQuestions=[...state.questions]
        var currentQuestions = displayedQuestions[state.currentQuestionIndex]
        questionsContainer.textContent = ''
        questionsContainer.textContent=currentQuestions.question
        optionsContainer.innerHTML = '';
        currentQuestions.options.forEach(function(optionText){
            var  btn = document.createElement("button");
            btn.type = "button";
            btn.setAttribute("role", "radio");
            btn.setAttribute("aria-checked", String(state.selectedAnswer === optionText));
            btn.className = "rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-center text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 aria-checked:border-blue-600 aria-checked:bg-blue-600 aria-checked:text-white aria-checked:hover:bg-blue-700";
            btn.textContent = optionText;
            optionsContainer.appendChild(btn)  
        })
        
        }
    if (state.status === "finished") {
        finalView.classList.remove("hidden");
        playingView.classList.add("hidden");
        loadingView.classList.add("hidden");
        finalScoreText.textContent = `You scored ${state.score} out of ${state.questions.length}`;
    }
}

render();

async function questions() {
    try {
        state.status = 'loading';
        render()
        var jsonQuestions = await fetch("./questions.json")
        var questionsGotten = await jsonQuestions.json()
        state.questions = [...questionsGotten.map(dataConnection)]
        state.status = 'playing'
        render()
        
    } catch (err) {
        console.log(err)
    }
}
questions()
function dataConnection(question){
    return{
        question: question.question,
        options: question.options,
        answer: question.correctAnswer
    }
}
