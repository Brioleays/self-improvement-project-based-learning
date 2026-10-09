
var state = {
    status: 'loading',              // 'empty' | 'loading' | 'loaded' | 'error'
    countries: [],                // array of country objects
  //{
      // name: 'Nigeria',
      // region: 'Africa',
       //population: 206139589,
       //flag: 'https://...',
      // currency: { NGN: { name: 'Nigerian naira', symbol: '₦' } }
   //}


    currentFilter: 'all',         // 'all' | region name
    currentPopulationArrangement: 'none',  // 'none' | 'asc' | 'desc'
    searchQuery: '',              // search input value
    errorMessage: '',             // error text when status is 'error'
    selectedCountry: null         // country object for popup
};
var totalCountriesValue = document.querySelector("#summary .totalCountries .tcValue")
var totalPopulationValue = document.querySelector("#summary .totalPopulation .tpValue")
var highestPopulationValue = document.querySelector("#summary .highestPopulation .hpValue")
var table = document.querySelector(".fetchedContent table")
var fetchedContent = document.querySelector(".fetchedContent")
var dialog = document.querySelector("dialog")
function render(){
    dialog.classList.add("hidden")
    if (state.status === 'empty'){
        totalCountriesValue.textContent = 0
        totalPopulationValue.textContent = 0
        highestPopulationValue.textContent = "None"
        table.classList.add("hidden")
        fetchedContent.innerHTML = ""
        fetchedContent.insertAdjacentHTML("beforeend","<p class='text-center text-xl'>Wait a moment</p>")
    }else if (state.status === 'loading'){
        totalCountriesValue.textContent = 0
        totalPopulationValue.textContent = 0
        highestPopulationValue.textContent = "None"
        table.classList.add("hidden")
        fetchedContent.innerHTML = ""
        fetchedContent.insertAdjacentHTML("beforeend","<p class='text-center text-xl'>Loading...</p>")
    }else if(state.status === 'loaded'){
        totalCountriesValue.textContent = 0
        totalPopulationValue.textContent = 0
        highestPopulationValue.textContent = "None"
        table.classList.remove("hidden")
    }
}
render()
async function fetchCountries() {
    // TODO: fetch from the API
    // TODO: on success, store in state.countries, set status to 'loaded', call render()
    // TODO: on error, set status to 'error', store message, call render()
}