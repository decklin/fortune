var options = [
    'fortunes', 'font', 'color', 'backgroundFrom', 'backgroundTo'
];

function init() {
    options.forEach(function(k) {
        document.getElementById(k).value = config.get(k);
    });
}

function save() {
    options.forEach(function(k) {
        config.set(k, document.getElementById(k).value);
    });
}
