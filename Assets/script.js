var API_KEY = '90bd873893e586663a4af08821c6ac66'
var searchBar = document.getElementById('search-bar')
var searchButton = document.getElementById('search-button')
console.log(searchBar, searchButton)
function onClick() {
    var city_name = searchBar.value
    console.log(searchBar.value)
}

searchButton.onclick = console.log(searchBar.value)
//var API_URL = `https://api.openweathermap.org/data/2.5/weather?q=` + city_name + `&appid=${API_KEY}`

