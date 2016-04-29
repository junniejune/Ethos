(function () {
    var displayResults, findAll, maxResults, names, resultsOutput, searchInput;
    names = [
        'Toyota Camry',
        'Chevrolot Corvette',
        'Chevrolot Traverse',
        'Buick Enclave'
    ];
    findAll = function (_this) {
        return function (wordList, collection) {
            return collection.filter(function (word) {
                word = word.toLowerCase();
                return wordList.some(function (w) {
                    return ~word.indexOf(w);
                });
            });
        };
    }(this);
    displayResults = function (resultsEl, wordList) {
        return resultsEl.innerHTML = wordList.map(function (w) {
            return '<li>' + w + '</li>';
        }).join('');
    };
    searchInput = document.getElementById('search');
    resultsOutput = document.getElementById('results');
    maxResults = 7;
    searchInput.addEventListener('keyup', function (_this) {
        return function (e) {
            var suggested, value;
            value = searchInput.value.toLowerCase().split(' ');
            suggested = value[0].length ? findAll(value, names) : [];
            return displayResults(resultsOutput, suggested);
        };
    }(this));
}.call(this));

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
