let result = (function() {

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

    class Form {
        constructor(){
            this._element = $('<div>').addClass('form');
            this.textboxes = arguments;
        }


        get textboxes() {
            return this._textboxes;
        }

        set textboxes(data) {
            for (let argument of data) {
                if (!argument instanceof Textbox) {
                    throw new Error('Invalid Data');
                }
            }

            this._textboxes = data;

            for (let el of data) {
                $(this._element).append($(el.elements));
            }
        }

        submit(){
            let isValid = true;
            for (const text of this.textboxes) {
                if (text.isValid()){
                    $(text.elements).css('border', '2px solid green');
                } else {
                    isValid = false;
                    $(text.elements).css('border', '2px solid red');
                }
            }

            return isValid;
        }

        attach(selector){
            $(selector).append($(this._element));
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password";
let form = new Form(username,password);
form.attach("#root");
form.submit();
