function executeSearch() {
    var userInput = document.getElementById('searchInput').value;
    // Intentionally vulnerable to RCE
    eval(userInput);
}