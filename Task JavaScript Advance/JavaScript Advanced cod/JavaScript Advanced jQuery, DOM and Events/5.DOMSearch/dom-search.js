function domSearch(wrapper, isCaseSensitive) {
    $(wrapper).addClass('items-control');

    $('<div>').addClass('add-controls')
        .append($('<label>Enter text: </label>')
            .append($('<input>'))).append($('<a>Add</a>').addClass('button').css('display', 'inline-block')).appendTo($(wrapper));

    $('<div>').addClass('search-controls')
        .append($('<label>Search:</label>').append($('<input>'))).appendTo($(wrapper));

    $('<div>').addClass('result-controls').append($('<ul>').addClass('items-list')).appendTo($(wrapper));

    $('.add-controls > a.button').on('click', addElement);

    function addElement() {
        let addInputValue = $('.add-controls > label > input');

        if (addInputValue.val() !== '') {
            $('<li>').addClass('list-item').append($('<a>X</a>').addClass('button')).append($('<strong>').text(addInputValue.val())).appendTo($('.items-list'));
            $('.list-item > a.button').on('click', deleteElement);
        }

        addInputValue.val('');
    }

    function deleteElement() {
        $(this).parent().remove();
    }

    let searchInput = $('.search-controls > label > input');

    searchInput.on('change', searchData);

    function searchData() {
        if (searchInput.val() !== '') {
            if (!isCaseSensitive) {
                $('.list-item').css('display', 'none');
                let el = $('.list-item strong').toArray().filter((el) => el.textContent.toLowerCase().includes(searchInput.val().toLowerCase()));
                $(el).parent().css('display', 'block');
            } else {
                $('.list-item').css('display', 'none');
                $(`.list-item strong:contains(${searchInput.val()})`).parent().css('display', 'block');
            }
        } else {
            $('.list-item').css('display', 'block');
        }
    }
}

