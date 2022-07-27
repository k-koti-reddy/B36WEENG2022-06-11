fetch('https://restcountries.com/v2/all')
.then(response => {
    return response.json();
})
.then( data => {
    mainFunction(data);
});

function mainFunction(data) 
{

    console.log(data);

    // get All countries from asia region using filter function.
    const asianCountries = data.filter( country => (country.region === "Asia"));
    console.log(asianCountries);

    // get All countries whose population is less than 200000
    const lessPopulation = data.filter( country => (country.population < 200000));
    console.log(lessPopulation);

    // print name, capital, flag
    data.forEach(country => {
        //console.log(country.name);
        //console.log(country.capital);
        //console.log(country.flag);
    });

    // print total population using reduce function
    const totalPopulation = data.reduce((total, country) => {
                                            return total = total + country.population;
                                        }, 0);

    console.log(totalPopulation);

    // print country which uses us dollars as currency.
    const countries = data.filter(country => {
        const currencies = country.currencies
        if(currencies != undefined) {
            const USDCurrencies= currencies.filter( currency => (currency.code === "USD"));
            return USDCurrencies.length > 0;
        }
        else {
            return false;
        }
    })

    console.log(countries);
}