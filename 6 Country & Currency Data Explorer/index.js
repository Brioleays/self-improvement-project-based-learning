
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

var statusMessage = document.querySelector('#status-message')
var tbody = document.querySelector("#table-body");
var fbrinput = document.querySelector('#fbrinput option')
var order = document.querySelector("#pinput")
var orderValue = order.value
var sbnInput = document.querySelector("#sbnInput")
var countryModal = document.querySelector("#countryModal")
function render(){
    if (state.status === 'loading'){
        totalCountriesValue.textContent = 0
        totalAreaValue.textContent = 0
        highestAreaValue.textContent = "None"
        table.classList.add("hidden")
        statusMessage.textContent = 'Loading'
        
    }else if(state.status === 'loaded'){
        table.classList.remove("hidden")
        document.querySelector("#status-message").textContent = "";
    // 1. START WITH THE MASTER LIST
        var displayCountries = [...state.countries];

    // 2. APPLY REGION FILTER (if any)
        if (state.currentFilter !== 'all') {
            displayCountries = displayCountries.filter(function(country) {
                return country.region === state.currentFilter;
            });
        }
    // 3. APPLY SEARCH QUERY (if any)
        if (state.searchQuery !== ''){
            displayCountries = displayCountries.filter(function(country){
                // return country.name.toLowerCase() === state.searchQuery.toLowerCase() exact matching
                return country.name.toLowerCase().includes(state.searchQuery.toLowerCase())
            })
        }
    // 3. APPLY AREA SORT (if any)
        if (state.currentAreaArrangement === 'highToLow') {
            displayCountries.sort(function(a, b) { return b.area - a.area; });
        } else if (state.currentAreaArrangement === 'lowToHigh') {
            displayCountries.sort(function(a, b) { return a.area - b.area; });
        }

    // 4. UPDATE THE SUMMARY BAR (Using the filtered list!)
        totalCountriesValue.textContent = displayCountries.length;
        totalAreaValue.textContent = displayCountries.reduce(function(sum, c) { return sum + c.area; }, 0).toFixed(2);
        
        var highest = displayCountries.reduce(function(max, c) { 
            return (c.area > max.area) ? c : max; 
        }, displayCountries[0] || { name: "None", area: 0 });
        highestAreaValue.textContent = highest.name;

    // 5. RENDER THE TABLE (Using the filtered list!)
        tbody.innerHTML = "";
        displayCountries.forEach(function(country) {
            tbody.insertAdjacentHTML("beforeend", `
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="p-4">${country.flag}</td>
                    <td class="p-4 font-medium text-gray-900">${country.name}</td>
                    <td class="p-4">${country.region}</td>
                    <td class="p-4">${country.area}</td>
                    <td class="p-4">
                        <button type="button" class="tableButton text-teal-600 hover:underline" data-country="${country.name}">View More</button>
                    </td>
                </tr>
            `);
        });
}
}
render()
async function fetchCountries() {
    
    try{
        state.status = 'loading'
        render()
        var countriesResponse = await fetch("./data/countries.json");
        var dataGotten = await countriesResponse.json();    
        state.countries = dataGotten.map(toRow)
        var allRegions = state.countries.map(function(country){
            return country.region
        })
        var validRegions = allRegions.filter(function(region){
            return region
        })
        var regionArr = [... new Set(validRegions)]
         regionArr.forEach(function(region){
             fbrinput.insertAdjacentHTML("afterend", `<option value="${region}">${region}</option>`)
        })
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
document.querySelector("#table-body").addEventListener("click", function(event) {
    
    
    if (event.target.classList.contains("tableButton")) {
        
        
        var countryName = event.target.dataset.country;
        
        
        var selectedCountry = state.countries.find(function(c) {
            return c.name === countryName;
        });
        
        
        document.querySelector(".nameValue").textContent = selectedCountry.name;
        document.querySelector(".AreaValue").textContent = selectedCountry.area;
        document.querySelector(".currencyValue").textContent = selectedCountry.currency;
        document.querySelector(".regionValue").textContent = selectedCountry.region;
        
        
        document.querySelector(".flagValue").textContent = selectedCountry.flag;
        
        countryModal.showModal();
    }
});

// Close button listener
document.querySelector(".close-btn").addEventListener("click", function() {
    countryModal.close();
});
// Listen for region change
document.querySelector("#fbrinput").addEventListener("change", function(e) {
    state.currentFilter = e.target.value;
    render(); // Re-draw the table
});

// Listen for area sort change
document.querySelector("#pinput").addEventListener("change", function(e) {
    state.currentAreaArrangement = e.target.value;
    render();
});
document.querySelector(".search button").addEventListener("click", function(){
    state.searchQuery = sbnInput.value.trim();
    render()
})

fetchCountries()