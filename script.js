function displayQuote(index) {
    var quotes = document.getElementsByClassName('quote');
    document.getElementById('displayed-quote').innerText = quotes[index].innerText;
}
