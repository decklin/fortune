function randomFortune(text) {
    var fortunes = text.split('\n%\n');
    var i = Math.floor(Math.random() * fortunes.length);
    return fortunes[i];
}

function init() {
    document.body.style.background = '-webkit-gradient(linear,0 0,0 100%,' +
        'from(' + config.get('backgroundFrom') + '),' +
        'to(' + config.get('backgroundTo') + '))';

    var fortune = document.getElementById('fortune');
    fortune.innerText = randomFortune(config.get('fortunes'));
    fortune.style.font = config.get('font');
    fortune.style.color = config.get('color');
}
