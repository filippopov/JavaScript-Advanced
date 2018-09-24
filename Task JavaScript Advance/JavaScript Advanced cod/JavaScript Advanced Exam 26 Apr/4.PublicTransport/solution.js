class PublicTransportTable {
    constructor(name){

        this.changeHeaderName(name)
        this.addEventListeners()
    }

    changeHeaderName(name) {
        $('caption').text(`${name}'s Public Transport`)
    }

    addVehicle(vehicleObj) {
        let element = $('<tr>').append($('<td>').text(vehicleObj.type)).append($('<td>').text(vehicleObj.name));
        let button = $('<button>').text('More Info');
        let insAfter = $('<tr class="more-info">')
            .append($('<td colspan="3">')
                .append($('<table>')
                    .append($('<tr>')
                        .append($('<td>').text(`Route: ${vehicleObj.route}`)))
                    .append($('<tr>')
                        .append($('<td>').text(`Price: ${vehicleObj.price}`)))
                    .append($('<tr>')
                        .append($('<td>').text(`Driver: ${vehicleObj.driver}`)))));



        button.on('click', function () {
            if ($(this).text() === 'More Info') {
                $(this).text('Less Info');
                insAfter.insertAfter(element);
            } else {
                $(this).text('More Info');
                insAfter.remove();
            }
        });

        element.append($('<td>').append(button));
        element.appendTo($('.vehicles-info'));
    }

    addEventListeners() {
        $('.search-btn').on('click', function () {
            let typeForm = $('input[name="type"]')
            let nameForm = $('input[name="name"]')
            let type = typeForm.val()
            let name = nameForm.val()

            if (name || type) {
                let rows = $('.vehicles-info > tr').not('.more-info')
                for (let i = 0; i < rows.length; i++) {
                    let firstChild = $(rows[i]).find('td').eq(0)
                    let secondChild = $(rows[i]).find('td').eq(1)
                    if(!firstChild.text().includes(type) || !secondChild.text().includes(name)) {
                        $(rows[i]).css('display', 'none')
                        let button = $(rows[i]).find('td').eq(2).find('button')
                        if (button.text() === 'Less Info') {
                            button.click()
                        }
                    } else {
                        $(rows[i]).css('display', '')
                    }
                }
            }
        })
        $('.clear-btn').on('click', function () {
            $('input[name="type"]').val('')
            $('input[name="name"]').val('')
            let rows = $('.vehicles-info > tr')
            for (let i = 0; i < rows.length; i++) {
                $(rows[i]).css('display', '')
            }
        })
    }
}