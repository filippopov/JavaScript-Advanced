function search() {
    let patern = $('#searchText').val();
    $('#towns li').css('font-weight', 'normal');
    let li = $(`#towns li:contains(${patern})`);
    $('#searchText').val('');
    li.css('font-weight', 'bold');
    $('#result').text(`${li.length} matches found.`);
}
