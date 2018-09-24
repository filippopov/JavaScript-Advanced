class Textbox {
    constructor(selector, regex) {
        this.elements = $(selector);
        this.value = $(this.elements[0]).val();
        this._invalidSymbols = regex;
        this.onInput();
    }

    onInput(){
        this.elements.on('input', (event) => {
            this.value =  $(event.target).val();
        });
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        for (let el of this.elements) {
            $(el).val(value);
        }
    }

    get elements() {
        return this._elements;
    }

    set elements(value) {
        this._elements = value;
    }

    isValid(){
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});
