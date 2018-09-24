function initializeTable () {
    $('#createLink').click(createCountry);
    createRow('Bulgaria', 'Sofia');
    createRow('Germany', 'Berlin');
    createRow('Russia', 'Moscow');

    $('#countriesTable tr td a:contains([Delete])').click(deleteRow);
    $('#countriesTable tr td a:contains([Up])').click(upRow);
    $('#countriesTable tr td a:contains([Down])').click(downRow);

    fixLinks();

    function fixLinks() {
        $('td a').show();
        $('#countriesTable tr:last-child a:contains([Down])').hide();
        $('#countriesTable tr:nth-child(3) a:contains([Up])').hide();
    }

    function createCountry() {
        let country = $('#newCountryText');
        let capital = $('#newCapitalText');
        let countryText = country.val();
        let capitalText = capital.val();
        country.val('');
        capital.val('');
        createRow(countryText, capitalText);

        $('#countriesTable tr td a:contains([Delete])').click(deleteRow);
        $('#countriesTable tr td a:contains([Up])').click(upRow);
        $('#countriesTable tr td a:contains([Down])').click(downRow);
        fixLinks();
    }

    function createRow(country, capital) {
        let tr = $('<tr>')
           .append(`<td>${country}</td>`)
           .append(`<td>${capital}</td>`)
           .append(`<td><a href="#">[Up]</a> <a href="#">[Down]</a> <a href="#">[Delete]</a></td>`);
        tr.css('display', 'none');
        tr.appendTo('#countriesTable');
        tr.fadeIn();
    }

    function deleteRow() {
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(() => {
            currentRow.remove();
            fixLinks();
        });
    }

    function upRow() {
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(() => {
            currentRow.insertBefore(currentRow.prev());
            currentRow.fadeIn();
            fixLinks();
        });

    }

    function downRow() {
        let currentRow = $(this).parent().parent();
        currentRow.fadeOut(() => {
            currentRow.insertAfter(currentRow.next());
            currentRow.fadeIn();
            fixLinks();
        });
    }
}
