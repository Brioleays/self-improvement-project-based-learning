
var state = {
    status: 'loading',              // 'empty' | 'loading' | 'loaded' | 'error'
    countries: [],                // array of country objects
  //{
      // name: 'Nigeria',
      // region: 'Africa',
       //Area: 206139589,
       //flag: 'https://...',
      // currency: { NGN: { name: 'Nigerian naira', symbol: '₦' } }
   //}


    currentFilter: 'all',         // 'all' | region name
    currentAreaArrangement: 'none',  // 'none' | 'asc' | 'desc'
    searchQuery: '',              // search input value
    errorMessage: '',             // error text when status is 'error'
    selectedCountry: null         // country object for popup
};
var totalCountriesValue = document.querySelector("#summary .totalCountries .tcValue")
var totalAreaValue = document.querySelector("#summary .totalArea .tpValue")
var highestAreaValue = document.querySelector("#summary .highestArea .hpValue")
var table = document.querySelector(".fetchedContent table")
var fetchedContent = document.querySelector(".fetchedContent")
var dialog = document.querySelector("dialog")
var statusMessage = document.querySelector('#status-message')
var tbody = document.querySelector("#table-body");
function render(){
    dialog.classList.add("hidden")
    if (state.status === 'loading'){
        totalCountriesValue.textContent = 0
        totalAreaValue.textContent = 0
        highestAreaValue.textContent = "None"
        table.classList.add("hidden")
        statusMessage.textContent = 'Loading'
        
    }else if(state.status === 'loaded'){
        table.classList.remove("hidden")
        totalCountriesValue.textContent = state.countries.length
        document.querySelector("#status-message").textContent = "";
        totalAreaValue.textContent = state.countries.reduce(function(sum, country){
          return sum + country.area
        }, 0)
       
        var highest = state.countries.reduce(function(maxCountry, country){
                if (maxCountry.area > country.area){
                    return maxCountry
                }else{
                    return country
                }
            }, state.countries[0])
        highestAreaValue.textContent = highest.name
        tbody.innerHTML = ""; // Clear old rows]
        state.countries.forEach(function(country){
            tbody.insertAdjacentHTML("beforeend", `<tr class="hover:bg-gray-50 transition-colors">
                                <td class="p-4">${country.flag}</td>
                                <td class="p-4 font-medium text-gray-900">${country.name}</td>
                                <td class="p-4">${country.region}</td>
                                <td class="p-4">${country.area}</td>
                                <td class="p-4">
                                    <button type="button" class="text-teal-600 hover:underline" aria-label="View more details about {country}">View More</button>
                                </td>
                            </tr>`)
        })
        
    }else if (state.status === 'empty'){
        totalCountriesValue.textContent = 0
        totalAreaValue.textContent = 0
        highestAreaValue.textContent = "None"
        table.classList.add("hidden")
        statusMessage.textContent = 'Wait a moment'
        
    }else if(state.status==='error'){
        totalCountriesValue.textContent = 0
        totalAreaValue.textContent = 0
        highestAreaValue.textContent = "None"
        table.classList.add("hidden")
        statusMessage.textContent = state.errorMessage
        
    }
}
render()
async function fetchCountries() {
    // TODO: fetch from the API
    try{
        state.status = 'loading'
        render()
        var countriesResponse = await fetch("./data/countries.json");
        var dataGotten = await countriesResponse.json();    
        state.countries = dataGotten.map(toRow)
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
function toRow(country){
    var cur = Object.values(country.currencies)[0];
    var currencyText = cur ? `${cur.name} (${cur.symbol})`:'None';
    return {
        flag: country.flag,
        name : country.name.common,
        region: country.region,
        area:country.area,
        currency: currencyText
    }
}
