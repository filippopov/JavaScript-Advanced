function increment(container) {
    container = $(container);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let ulElement = $('<ul>');

    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', 'disabled');

    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');

    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    ulElement.addClass('results');

    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    ulElement.appendTo(fragment);
    container.append(fragment);

    $(incrementBtn).on('click', function () {
        textArea.val(Number(textArea.val()) + 1);
    });

    $(addBtn).on('click', function () {
        let liElement = $(`<li>${textArea.val()}</li>`);
        ulElement.append(liElement);
    })
}
