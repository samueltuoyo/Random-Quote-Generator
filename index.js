const quoteElement = document.getElementById("quoteElement")
const apiUrl = `https://api.quotable.io/random`
function Gen(){
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => quoteElement.textContent = data.content)
    .catch(error => console.log('error fetching quote!' + error))
}
