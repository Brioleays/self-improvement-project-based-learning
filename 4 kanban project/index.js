var state = {
    
    cards: [],
    wipLimit: 3
};


var mainForm = document.querySelector("#addingForm");
var popUpForm = document.querySelector("#secondaryAdditionForm");
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
                            <input type="date" class="bg-gray-50 border border-gray-500 rounded-xl py-2 px-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white" id="date">
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

var cardHtml=`<div class="card bg-gray-100 rounded-xl shadow-xl p-4 space-y-1 ">
                            <button type="button" class="flex text-xl text-gray-500 items-right">&times;</button>
                            <div class="id-container flex flex-row gap-2 items-center" aria-hidden="true">
                                <p class="card-id">Time Stamp:</p>
                                <p class="card-id-value">12345678901</p>
                            </div>
                            <div class="title-container flex flex-row gap-2 items-center">
                                <p class="card-title">Title:</p>
                                <p class="card-title-value">Design Landing</p>
                            </div>
                            <div class="description-container">
                                <p class="card-description flex flex-row gap-2 items-center">Description:</p>
                                <p class="card-description-value">wireframe and mockup</p>
                            </div>
                            <div  class="assignment-container flex flex-row gap-2 items-center" aria-hidden="true">
                                <p class="card-assignment">Assignment:</p>
                                <p class="card-assignment-value">Samuel</p>
                            </div>
                            <div class="date-container flex flex-row gap-2 items-center">
                                <p class="card-date">Date:</p>
                                <p class="card-date-value">2026-08-10</p>
                            </div>
                            <div  class="priority-container flex flex-row gap-2 items-center">
                                
                                <p class="card-priority">Priority:</p>
                                <div class="w-4 h-4 bg-red-500 rounded-full"></div>
                                <p class="card-priority-value">Urgent</p>
                            </div>
                            <div class="flex gap-2 mt-2">
                                <button class="move-left bg-gray-200 px-2 rounded" data-action="move-left">←</button>
                                <button class="move-right bg-gray-200 px-2 rounded" data-action="move-right">→</button>
                            </div>
                        </div>
                        </div>
`;

var table = document.querySelector("#table");
var wipCounter = document.querySelector("#wipCounter")
                
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
    var todoCards= state.cards.status.filter(function(card){
        return card.status="todo"
    })
    var inProgressCards= state.cards.status.filter(function(card){
        return card.status="inProgress";
    })
    var completed = state.cards.state.filter(function(card){
        return card.status="done";
    })

    // 4. Clear each column container
    state.cards=[{}]

    
    // 5. If a column has cards, build and insert card HTML

    
    // 6. If a column is empty, show its empty message
    
    // 7. Update WIP counter text
    
    // 8. If inProgress count exceeds wipLimit, show warning
}