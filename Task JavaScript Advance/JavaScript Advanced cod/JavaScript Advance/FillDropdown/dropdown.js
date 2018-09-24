function addItem() {
    let nameElement = document.getElementById('newItemText');
    let valueElement = document.getElementById('newItemValue');
    let name = nameElement.value;
    let value = valueElement.value;
    document.getElementById('menu').innerHTML = '<option value="' + value + '">' + name + '</option>';
    nameElement.value = '';
    valueElement.value = '';
}
