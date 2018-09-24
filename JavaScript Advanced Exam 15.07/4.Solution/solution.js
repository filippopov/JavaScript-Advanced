function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let customSelectInput = $('input.custom-select');
    let priceInput = $('#price');
    let quantityInput = $('#quantity');
    let buttonSubmit = $('#submit');

    $('input.custom-select').on('input', submitInventory);
    buttonSubmit.on('click', addInventory);

    function addInventory() {
        let customSelect = customSelectInput.val();
        let price = priceInput.val();
        let quantity = quantityInput.val();

        let liItem = $(`<li>Product: ${customSelect} Price: ${price} Quantity: ${quantity}</li>`);
        $('ul.display').append(liItem);
        updateCapacityAndQuantity();
        function updateCapacityAndQuantity() {
            let qtyValue = 0;
            let capacityValue = 0;
            let priceRegex = /Price: (\d+)/g;
            let qtyRegex = /Quantity: (\d+)/g;

            let allData = $('ul.display li');
            allData.each((i, el) => {
                while (matchRegexPrice = priceRegex.exec($(el).text())) {
                    qtyValue += Number(matchRegexPrice[1]);
                }

                while (matchRegexQty = qtyRegex.exec($(el).text())) {
                    capacityValue += Number(matchRegexQty[1]);
                }
            });

            if (capacityValue == 150) {
                $('#capacity').val('full').addClass('fullCapacity');
                $(buttonSubmit).prop('disabled', true);
                $(customSelectInput).prop('disabled', true);
                $(priceInput).prop('disabled', true);
                $(quantityInput).prop('disabled', true);
            } else {
                $('#capacity').val(capacityValue);
            }

            $('#sum').val(qtyValue);

        }

        customSelectInput.val('');
        priceInput.val('1');
        quantityInput.val('1');
    }
    
    function submitInventory() {
        let customSelect = customSelectInput.val();
        if (customSelect) {
            $(buttonSubmit).prop('disabled', false);
        } else {
            $(buttonSubmit).prop('disabled', true);
        }
    }
}
