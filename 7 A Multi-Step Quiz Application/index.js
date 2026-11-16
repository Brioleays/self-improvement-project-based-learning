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
    }
    if (state.status === "finished") {
        finalView.classList.remove("hidden");
        playingView.classList.add("hidden");
        loadingView.classList.add("hidden");
        finalScoreText.textContent = `You scored ${state.score} out of 10`;
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
        
    }
}

function dataConnection(question){
    return{
        question: question.question,
        options: question.options,
        answer: question.correctAnswer
    }
}
