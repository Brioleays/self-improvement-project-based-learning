var state = {
    
    cards: [],
    wipLimit: 3
};

var mainForm = document.querySelector("#addingForm");
var popUpForm = document.querySelector("#secondaryAdditionForm");
var table = document.querySelector("#table");
var wipCounter = document.querySelector("#wipCounter");
var todoColumn = document.querySelector("#todo .cardcontainer");
var inProgressColumn = document.querySelector("#inProgress .cardcontainer");
var doneColumn = document.querySelector("#Done .cardcontainer")
var tableColumnsInnerHtml = [todoColumn,inProgressColumn,doneColumn]
var todoColumnEmptyMessage = document.querySelector("#todo .cardcontainer p")
var inProgressColumnEmptyMessage = document.querySelector("#inProgress .cardcontainer p");
var doneColumnEmptyMessage = document.querySelector("#done .cardcontainer p");
var emptyMessages= [todoColumnEmptyMessage, inProgressColumnEmptyMessage, doneColumnEmptyMessage]
var wipOutput = document.querySelector("#wipCounter span")

var wipErrorMessageContainer = document.querySelector("#wipErrorMessageContainer");
function render() {
 
    // 1. If there are no cards, show the form, hide the table
    if (state.cards.length===0){
        mainForm.classList.remove("hidden");
        table.classList.add("hidden");
        wipCounter.classList.add("hidden");

    }
    
    // 2. If there are cards, hide the form, show the table, show WIP counter
    if (state.cards.length >0){
       
        mainForm.classList.add("hidden");
        table.classList.remove("hidden");
        wipCounter.classList.remove("hidden");

    }
    
    // 3. Filter cards into todo, inProgress, done arrays
    var todoCards= state.cards.filter(function(card){
        return card.status==="todo"
    })
    var inProgressCards= state.cards.filter(function(card){
        return card.status==="inProgress";
    })
    var doneCards = state.cards.filter(function(card){
        return card.status==="done";
    })

    // 4. Clear each column container
   // TODO
todoColumn.innerHTML = "";
if (todoCards.length > 0) {
    todoCards.forEach(function(card) {
        todoColumn.insertAdjacentHTML('beforeend', createCardHtml(card));
    });
} else {
    todoColumn.insertAdjacentHTML('beforeend', '<p>No task yet</p>');
}

// IN PROGRESS
inProgressColumn.innerHTML = "";
if (inProgressCards.length > 0) {
    inProgressCards.forEach(function(card) {
        inProgressColumn.insertAdjacentHTML('beforeend', createCardHtml(card));
    });
} else {
    inProgressColumn.insertAdjacentHTML('beforeend', '<p>No task in progress</p>');
}

// DONE
doneColumn.innerHTML = "";
if (doneCards.length > 0) {
    doneCards.forEach(function(card) {
        doneColumn.insertAdjacentHTML('beforeend', createCardHtml(card));
    });
} else {
    doneColumn.insertAdjacentHTML('beforeend', '<p>No task completed</p>');
}
    
    // 5. If a column has cards, build and insert card HTML
    
    
    // 6. If a column is empty, show its empty message
    
    // 7. Update WIP counter text
    wipOutput.textContent = inProgressCards.length;
    // 8. If inProgress count exceeds wipLimit, show warning
    if (inProgressCards.length>state.wipLimit){
        wipErrorMessageContainer.classList.remove("hidden")
    }else{
       wipErrorMessageContainer.classList.add("hidden") 
    }

}
function createCardHtml(card) {
    return `
        <div class="card bg-gray-100 rounded-xl shadow-xl p-4 space-y-1">
            <button type="button" class="delete-btn text-xl text-gray-500 ml-auto" data-action="delete" data-id="${card.id}">&times;</button>
            <div class="title-container flex flex-row gap-2 items-center">
                <p class="card-title">Title:</p>
                <p class="card-title-value">${card.title}</p>
            </div>
            <div class="description-container">
                <p class="card-description flex flex-row gap-2 items-center">Description:</p>
                <p class="card-description-value">${card.description}</p>
            </div>
            <div class="priority-container flex flex-row gap-2 items-center">
                <p class="card-priority">Priority:</p>
                <div class="w-4 h-4 rounded-full bg-${card.priority}-500"></div>
                <p class="card-priority-value">${card.priority}</p>
            </div>
            <div class="flex gap-2 mt-2">
                <button class="move-left bg-gray-200 px-2 rounded" data-action="move-left" data-id="${card.id}">←</button>
                <button class="move-right bg-gray-200 px-2 rounded" data-action="move-right" data-id="${card.id}">→</button>
            </div>
        </div>`;
        
}

function formHandler(){
    var formHtml = ` <form action="" class="flex flex-col bg-white rounded-xl shadow-xl p-4 space-y-4">
                    <!-- planing on embedding this in the js and use an if else for loadedMessageContainer.insertAdjacentHTML('beforeend', var name of addingForm and secondaryAdditionForm) using if in js; -->
                    <div class="flex flex-col space-y-2">
                        <label for="title" class="font-semibold">Task Title</label>
                        <input type="text" id="title" class="bg-gray-50 border border-gray-500 rounded-xl py-2 px-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white" placeholder="e.g. Study" required>
                    </div>
                    <div class="flex flex-col ">
                        <label for="description" class="font-semibold">Task Description</label>
                        <textarea name="" id="description" class="bg-gray-50 border border-gray-500 rounded-xl py-2 px-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white" placeholder="e.g. read the book on growth"></textarea>
                    </div>
                    <!-- <button type="submit" id="optional-toggler">optionals</button> -->
                    <details id="optional-toggled">
                        <span class="group-open:hidden">Show optional inputs</span>
                        <span class="group-open:block">hide optional inputs</span>
                        <article>
                        <div class="flex flex-col ">
                            <label for="assignment">Task Assigned to:</label>
                            <input type="text" id="assignment" class="bg-gray-50 border border-gray-500 rounded-xl py-2 px-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white" placeholder="e.g. Hephzibah">
                        </div>
                        <div class="flex flex-col ">
                            <label for="date">Task Date</label>
                            <input type="date" id="date" class="bg-gray-50 border border-gray-500 rounded-xl py-2 px-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white" id="date">
                        </div>

                        <div class="flex flex-col ">
                            <label for="prioritySelector">Level of Importance</label>
                            <select name="" id="prioritySelector">
                                <option value="none">Select</option>
                                <option value="urgent">Urgent tasks</option>
                                <option value="necessary">Necessary tasks</option>
                                <option value="side">Side task</option>
                                <option value="pending">pending</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                        </article>
                    </details>
                    <button type="submit" class="submit-btn items-center bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-700 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black">Add</button>
                </form>`;
                mainForm.innerHTML = formHtml;  // insert the HTML
                var form = mainForm.querySelector("form");  // get the real form element
                form.addEventListener("submit", function(event) { 
                    event.preventDefault();
                    var title = event.target.querySelector("#title").value;
                    var description = event.target.querySelector("#description").value;
                    var assignment = event.target.querySelector("#assignment").value;
                    var date = event.target.querySelector("#date").value;
                    var prioritySelector = event.target.querySelector("#prioritySelector").value;
                    var newCard = {
                        id: Date.now(),
                        title: title,
                        description: description,
                        assignment: assignment,
                        date: date,
                        status: 'todo',
                        priority: prioritySelector
                    };
                    state.cards.push(newCard);
                    localStorage.setItem('kanbanCards', JSON.stringify(state.cards));
                    form.reset();
                    render();
})
}
//it worked in the normal ui
var savedCards = localStorage.getItem('kanbanCards');
if (savedCards) {
    state.cards = JSON.parse(savedCards);
}
formHandler();
render()