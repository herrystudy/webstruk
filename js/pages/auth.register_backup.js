/**
 *
 * AuthRegister
 *
 * Pages.Authentication.Register page content scripts. Initialized from scripts.js file.
 *
 *
 */

class AuthRegister {
    constructor() {
        // Initialization of the page plugins
        this._initForm();
    }

    // Form validation
    _initForm() {
        const form = document.getElementById("registerForm");
        if (!form) {
            return;
        }
        const validateOptions = {
            rules: {
                registerKota: {
                    required: true,
                    regex: /[A-Za-z0-9 _]/i,
                },
                // registerReferal: {
                //     required: true,
                //     minlength: 6,
                //     regex: /[A-Za-z0-9 _]/i,
                // },
                registerCheck: {
                    required: true,
                },
                registerNama: {
                    required: true,
                },
            },
            messages: {
                registerKota: {
                    regex: "Mohon tidak menggunakan karakter simbol",
                },
                // registerReferal: {
                //     minlength: "Referal must be at least {0} characters!",
                //     regex: "Password must contain a letter and a number!",
                // },
                registerCheck: {
                    required: "Please read and accept the terms!",
                },
                registerNama: {
                    required: "Nama tidak boleh kosong",
                },
            },
        };
        jQuery(form).validate(validateOptions);
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (jQuery(form).valid()) {
                const formValues = {
                    kota: form.querySelector('[name="registerKota"]').value,
                    // referal: form.querySelector('[name="registerReferal"]')
                    //     .value,
                    nama: form.querySelector('[name="registerNama"]').value,
                    check: form.querySelector('[name="registerCheck"]').checked,
                };
                console.log(formValues);
                form.submit();
            }
        });
    }
}
