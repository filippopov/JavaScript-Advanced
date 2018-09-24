function extractText() {
    //let result = [];
    //$('ul#items li').each((index, element) => (result.push(element.textContent)));
    //$('#result').text(result.join(', '));

    $('#result').text($('ul#items li').toArray().map(li => li.textContent).join(', '));
}
