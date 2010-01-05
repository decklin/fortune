function randomFortune(text) {
    var fortunes = text.split('\n%\n');
    var i = Math.floor(Math.random() * fortunes.length);
    return fortunes[i];
}

function init() {
    document.body.style.background = '-webkit-gradient(linear,0 0,0 100%,' +
        'from(' + localStorage['backgroundFrom'] + '),' +
        'to(' + localStorage['backgroundTo'] + '))';
    with (document.getElementById('fortune')) {
        innerText = randomFortune(localStorage['fortunes']);
        style.font = localStorage['font'];
    }
}
