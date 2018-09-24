let bookGenerator = (function () {
    let id = 0;

    return function (selector, titleName, authorName, isbn) {
        id++;
        let wrapper = $(selector);
        let bookDiv = $('<div>').attr('id', `book${id}`).css('border', 'medium none');
        let pTitle = $('<p>').addClass('title').text(titleName);
        let pAuthor = $('<p>').addClass('author').text(authorName);
        let pIsbn = $('<p>').addClass('isbn').text(isbn);
        let buttonSelect = $('<button>').text('Select');
        let buttonDeselect = $('<button>').text('Deselect');

        bookDiv
            .append(pTitle)
            .append(pAuthor)
            .append(pIsbn)
            .append(buttonSelect)
            .append(buttonDeselect)
            .appendTo(wrapper);

        $(`#book${id} button`).on('click', select);

        function select() {
            let button = $(this);
            if (button.text() === 'Select') {
                console.log(button.pa);
                button.parent().css('border', '2px solid blue');
            } else {
                button.parent().css('border', 'none');
            }
        }
    }
})();