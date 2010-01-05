var fields = [
    'fortunes', 'font', 'backgroundFrom', 'backgroundTo'
];

function loadLocal(k) {
    document.getElementById(k).value = localStorage[k];
}
function saveLocal(k) {
    localStorage[k] = document.getElementById(k).value;
}
function load() {
    fields.forEach(loadLocal);
}
function save() {
    fields.forEach(saveLocal);
}
