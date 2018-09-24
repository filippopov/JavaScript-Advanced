function validate() {
    let submitButton = $('#submit');
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let company = $('#company');
    let companyNumber = $('#companyNumber');

    let companyInfo = $('#companyInfo');

    let validDiv = $('#valid');

    submitButton.on('click', function (ev) {
        ev.preventDefault();
        check();
    });

    function check() {
        let valid = true;

        let usernamePattern = /^[A-Za-z0-9]{3,20}$/g;
        if (!usernamePattern.test(username.val())) {
            valid = false;

            username.css('border-color', 'red');
        } else {
            username.css('border', 'none');
        }

        let passwordPattern = /^[A-Za-z0-9_]{5,15}$/g;
        if (!passwordPattern.test(password.val())) {
            valid = false;

            password.css('border-color', 'red');
        } else {
            password.css('border', 'none');
        }

        let confirmPaswordPattern = /^[A-Za-z0-9_]{5,15}$/g;
        if (!confirmPaswordPattern.test(confirmPassword.val())) {
            valid = false;

            confirmPassword.css('border-color', 'red');
        } else {
            confirmPassword.css('border', 'none');
        }

        let emailPattern = /^.*@.*\..*$/g;

        if (!emailPattern.test(email.val())) {
            valid = false;

            email.css('border-color', 'red');
        } else {
            email.css('border', 'none');
        }

        if (password.val() !== confirmPassword.val()) {
            valid = false;
            password.removeAttr('style');
            confirmPassword.removeAttr('style');

            password.css('border-color', 'red');
            confirmPassword.css('border-color', 'red');
        }

        if (companyInfo.css('display') === 'block') {
            if ((Number(companyNumber.val()) < 1000) || (Number(companyNumber.val()) > 9999)) {
                valid = false;

                companyNumber.css('border-color', 'red');
            } else {
                companyNumber.css('border', 'none');
            }
        }

        if (valid) {
            validDiv.css('display', 'block')
        } else {
            validDiv.css('display', 'none');
        }
    }

    company.on('change', function () {
        if (company.is(':checked')) {
            companyInfo.css('display', 'block')
        } else {
            companyInfo.css('display', 'none');
        }
    })
}
