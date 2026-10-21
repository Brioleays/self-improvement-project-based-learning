
var state = {
    status: 'loaded',              // 'empty' | 'loading' | 'loaded' | 'error'
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
    if (state.status === 'loading'){
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
    }else if (state.status === 'empty'){
        totalCountriesValue.textContent = 0
        totalPopulationValue.textContent = 0
        highestPopulationValue.textContent = "None"
        table.classList.add("hidden")
        fetchedContent.innerHTML = ""
        fetchedContent.insertAdjacentHTML("beforeend","<p class='text-center text-xl'>Wait a moment</p>")
    }else if(state.status==='error'){
        totalCountriesValue.textContent = 0
        totalPopulationValue.textContent = 0
        highestPopulationValue.textContent = "None"
        table.classList.add("hidden")
        fetchedContent.innerHTML=""
    }
}
render()
async function fetchCountries() {
    // TODO: fetch from the API
    try{
        state.status = 'loading'
        render()
        var countriesUrl = await fetch("./data/countries.json");
        var dataGotten = await response.json(countriesUrl);
        var information = dataGotten.data.objects.map(function(country){
           return{ name : /* country.names.official*/,
            region:  /*country.region*/,
            population: /*country.population*/,
            flag: /*country.flag.url_svg*/,
            currency: /*country[0]? `${country.currencies[0].code} (${country.currencies[0].symbol})` : 'N/A'  } */     

        })
        state.countries = information
        state.status='loaded'
        render()
    }
    catch(err){
        console.log("Fetch error:", err);
        state.status ='error'
        state.errorMessage = "Failed to load countries"
        render()
    }
}
fetchCountries()
render()
