state = {
    expenses: [], 
            // {id: Date.now(),
            //  date: '2026-08-28',
            //  category: 'Food',
            //  amount: 5000,
            //  recipient: 'Mama Put'}
    status: 'empty', //'empty'|'loaded'|'filtered'|'loading'
    exchangeRate: {}, //naira: 1, usd: 1600 
    currentFilter: 'all', //all | recipient |category
    filterField:'', //all|category|amount|recipient
    filterValue:'',
};
var viewExpenseErrorStatement = document.querySelector(".error-statement")
var totalPerMonth = document.querySelector(".metricsSummary .totalPerMonth");
var highestCategory =  document.querySelector(".metricsSummary .highestCategory");
var numberOfTransaction = document.querySelector(".metricsSummary .numberOfTransaction");
var form = document.querySelector(".addExpenseInput");
var categoryInput = document.querySelector(".addExpenseInput div .categoryInput");
var otherCategoryInput = document.querySelector(".addExpenseInput div .otherCategoryInput");
var amountInput = document.querySelector(".addExpenseInput div .amountInput");
var recipientInput = document.querySelector(".addExpenseInput div .recipientInput");
var dateInput = document.querySelector(".addExpenseInput div .dateInput");
var transactionTypeInput = document.querySelector(".addExpenseInput div .transactionTypeInput");
var addExpenseSubmit = document.querySelector(".addExpenseInput div .addExpenseSubmit");
var viewExpenseFilter = document.querySelector(".viewExpense .searchBox .viewExpenseFilter");
var viewExpenseFilterInput = document.querySelector(".viewExpense .searchBox .viewExpenseFilterInput");
var filterSearch = document.querySelector(".viewExpense .searchBox .filterSearch");
var filterSearchInput = document.querySelector("#filterSearch #search-input");
var filterSearchBtn = document.querySelector("#filterSearch .searchBtn");
var ngnConversionIncrease = document.querySelector(".totalNgnDols .totalNgn h5 span");
var totalNgn = document.querySelector(".totalNgnDols .totalNgn p");
var dolsConversionIncrease = document.querySelector(".totalNgnDols .totalDols h5 span");
var totalDols = document.querySelector(".totalNgnDols .totalDols p");
var viewExpenseContent = document.querySelector(".viewExpense .viewExpenseContent")



function render() {
    // 1. Calculate totalPerMonth from state.expenses
    
     //the first is the accumulator and it is initialized out side the curly bracket after a comma
     
     var total = state.expenses.reduce(function(sum, expense) {
    if (expense.transactionType === 'credit') {
        return sum + expense.amount;
    } else {
        return sum - expense.amount;
    }
    }, 0);
    totalPerMonth.textContent = total
    // 2. Calculate highestCategory from state.expenses
        // 1. Create empty object for category counts
        // 2. Loop through state.expenses
        // 3. If category exists in object, add 1
        // 4. If not, set it to 1
        // 5. Find the category with the highest count
        // 6. Set highestCategory.textContent to that category
     var categoryCount ={}
     state.expenses.forEach(function(expense){
        if(categoryCount[expense.category]){
            categoryCount[expense.category]+=1   
        }else{
            categoryCount[expense.category]=1   
        }
        
     })
     var highestKey = ""
     var highestCount=0
     Object.keys(categoryCount).forEach(function(value){
        var currentPrice= categoryCount[value]
        if (currentPrice>highestCount){
            highestCount = currentPrice;
            highestKey = value
        }
     })

     highestCategory.textContent = highestKey;
        
    // 3. Calculate numberOfTransaction from state.expenses
     numberOfTransaction.textContent = state.expenses.length;
    // 4. Update the DOM elements with these values
    
    // 5. Apply currentFilter to decide which expenses to show
    var filteredExpenses = state.expenses.filter(function(expense) {
        if (state.filterField === '') {
            return true;
        }
        if (state.filterField === "category"){
            return expense.category === state.filterValue;
        }
        if (state.filterField === "recipient") {
            return expense.recipient === state.filterValue;
        }
        if (state.filterField === "amount") {
            return expense.amount === Number(state.filterValue);
        }
        return true;
    });


    // 6. Clear the viewExpense list
    viewExpenseContent.innerHTML =""
        if (filteredExpenses.length === 0) {
            viewExpenseContent.insertAdjacentHTML('beforeend', '<p>No Expense yet</p>');
        } else{
            filteredExpenses.forEach(function (expenseDetail){
                var amountClass = ""
                var sign = ""
                if (expenseDetail.transactionType==="credit"){
                    amountClass='text-green-500'
                    sign='+'
                }else{
                    amountClass='text-red-500'
                    sign='-'
                }
                var eachLines = `
                    <div class="header min-w-[600px] flex flex-row justify-between">
                                        <p>${expenseDetail.id}</p>
                                        <p>${expenseDetail.category}</p>
                                        <p class="${amountClass}">${sign}${expenseDetail.amount}</p>
                                        <p>${expenseDetail.recipient}</p>
                                        <p>${expenseDetail.date}</p>
                                    </div>
                `;
                viewExpenseContent.insertAdjacentHTML('beforeend', eachLines);
              })
        
              
        }
    
    
   
    
    // 7. If filtered list is empty, show "No Expense yet"
    // 8. If not empty, build and insert expense rows
    
    // 9. Calculate totalNgn and totalDols
    totalNgn.textContent = total;
    if (state.exchangeRate.naira) {
        ngnConversionIncrease.textContent = `${state.exchangeRate.naira.toFixed(2)} Ngn`;
        dolsConversionIncrease.textContent = `${(1 / state.exchangeRate.naira).toFixed(6)} Usd`;
        totalDols.textContent = (total / state.exchangeRate.naira).toFixed(2);
    } else {
        ngnConversionIncrease.textContent = "Loading...";
        dolsConversionIncrease.textContent = "";
        totalDols.textContent = "—";
    }

     

    // 10. Update conversion display

    // 11. Apply red/green indicators based on increase/decrease

}
form.addEventListener("submit", function formHandler(event) {
    event.preventDefault();
     var categorySelect = document.querySelector("#category");
    var amountField = document.querySelector("#amount");
    var recipientField = document.querySelector("#recipient");
    var dateField = document.querySelector("#date");
    var transactionTypeSelect = document.querySelector("#transactionType");
    var otherCategoryField = document.querySelector("#others");
    var category = categorySelect.value.trim();
    var otherCategory = otherCategoryField.value.trim();
    var amount= Number(amountField.value);
    var recipient = recipientField.value.trim();
    var date = dateField.value.trim();
    var transactionType = transactionTypeSelect.value.trim();
    
    var newExpense = {
                        id: Date.now(),
                        category: category || otherCategory,
                        amount: amount,
                        recipient: recipient,
                        date: date, 
                        transactionType:transactionType                       
                    };
     state.expenses.push(newExpense);
                    localStorage.setItem('expenses', JSON.stringify(state.expenses));
                    form.reset();
                    render();

} )

var savedExpenses = localStorage.getItem('expenses');
if (savedExpenses) {
    state.expenses = JSON.parse(savedExpenses);
}



async function conversionRate(){
    var conversionUrl = `https://open.er-api.com/v6/latest/USD`;
    var conversionResponse = await fetch(conversionUrl);
    var conversionData = await conversionResponse.json();
    if (!conversionData.rates || !conversionData.rates.NGN){
            state.status = "error";
            state.errorMessage = "rates not found.";
            render();
            return; //so this will make it not run anymore it will stop here
        }
    var USDrate = conversionData.rates.USD;
    var NgNrate =conversionData.rates.NGN;
    state.exchangeRate.naira=NgNrate;
    state.exchangeRate.usd=USDrate;
    render();
}
    viewExpenseFilterInput.addEventListener("change", function(event) {
        state.filterField = event.target.value
        render()
    });
    filterSearchBtn.addEventListener("click", function() {
        state.filterValue = filterSearchInput.value.trim();
        render();
    });
        
        


conversionRate();
