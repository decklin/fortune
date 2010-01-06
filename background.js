var defaults = {
    fortunes: 'Things change.',
    font: '12pt sans-serif',
    color: '#000000',
    backgroundFrom: '#ffffff',
    backgroundTo: '#cfdae6'
};

for (var k in defaults) {
    if (!localStorage[k]) localStorage[k] = defaults[k];
}
