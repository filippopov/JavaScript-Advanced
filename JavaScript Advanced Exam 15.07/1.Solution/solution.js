function addSticker() {
    let titleInput = $('div.title-input > .title');
    let textInput = $('div.text-input > .content');

    let title = titleInput.val();
    let text = textInput.val();

    if (title && text) {
        let button = $('<a class="button">x</a>');
        let note = $('<li class="note-content">')
            .append($(button))
            .append($(`<h2>${title}</h2>`))
            .append($('<hr>')).append($('<p>').text(text));


        button.on('click', function () {
            note.remove();
        })

        $('#sticker-list').append(note);
        titleInput.val('');
        textInput.val('');
    }
}