state = {
    expenses: [], 
            // {id: Date.now(),
            //  date: '2026-08-28',
            //  category: 'Food',
            //  amount: 5000,
            //  recipient: 'Mama Put'}
    status: 'empty', //'empty'|'loaded'|'filtered'|'loading'
    exchangeRate: {}, //naira: 1, usd: 1600 
    currentFilter: 'all' //all | recipient |category
};
var viewExpenseErrorStatement = document.querySelector(".error-statement")
var totalPerMonth = document.querySelector(".metricsSummary .totalPerMonth");
var highestCategory =  document.querySelector(".metricsSummary .highestCategory");
var numberOfTransaction = document.querySelector(".metricsSummary .numberOfTransaction");
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
    
    var total = state.expenses.reduce(function(sum, expense){
        return sum + expense.amount
     }, 0) //the first is the accumulator and it is initialized out side the curly bracket after a comma
     totalPerMonth.textContent = total
    // 2. Calculate highestCategory from state.expenses
        // 1. Create empty object for category counts
        // 2. Loop through state.expenses
        // 3. If category exists in object, add 1
        // 4. If not, set it to 1
        // 5. Find the category with the highest count
        // 6. Set highestCategory.textContent to that category
     categoryCount ={}
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
        if (state.currentFilter === 'all') {
            return true;
        }
        return expense.category === state.currentFilter;
    });
    // 6. Clear the viewExpense list
    viewExpenseContent.innerHTML =""
    console.log("filteredExpenses:", filteredExpenses);
    console.log("viewExpenseContent:", viewExpenseContent);
    console.log("filteredExpenses length:", filteredExpenses.length);
        if (filteredExpenses.length === 0) {
            viewExpenseContent.insertAdjacentHTML('beforeend', '<p>No Expense yet</p>');
        } else{
            filteredExpenses.forEach(function (expenseDetail){
            var eachLines = `
            <div class="header min-w-[600px] flex flex-row justify-between">
                                <p>${expenseDetail.id}</p>
                                <p>${expenseDetail.category}</p>
                                <p>${expenseDetail.amount}</p>
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
    totalNgn.textContent = total
    // 10. Update conversion display
    // 11. Apply red/green indicators based on increase/decrease

}
function formHandler (){
    
}
async function conversionRate(){

}
