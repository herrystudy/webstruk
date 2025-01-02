/**
 *
 * AuthLogin
 *
 * Pages.Authentication.Login page content scripts. Initialized from scripts.js file.
 *
 *
 */

class AuthLogin {
    constructor() {
        // Initialization of the page plugins
        this._initForm();
    }

    // Form validation
    _initForm() {
        const form = document.getElementById("loginForm");
        if (!form) {
            return;
        }
        const validateOptions = {
            rules: {
                password: {
                    required: true,
                },
                username: {
                    required: true,
                },
            },
            messages: {
                password: {
                    required: "Pin Transaksi tidak boleh kosong",
                },
                username: {
                    required: "Kode Reseller tidak boleh kosong",
                },
            },
        };
        jQuery(form).validate(validateOptions);
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (jQuery(form).valid()) {
                const formValues = {
                    username: form.querySelector('[name="username"]').value,
                    password: form.querySelector('[name="password"]').value,
                };
                console.log(formValues);
                form.submit();
            }
        });
    }
}
