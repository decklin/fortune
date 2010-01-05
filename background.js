var defaults = {
    fortunes: 'Things change.',
    font: '12pt sans-serif',
    backgroundFrom: '#ffffff',
    backgroundTo: '#cfdae6'
};

for (var k in defaults) {
    if (!localStorage[k]) localStorage[k] = defaults[k];
}
