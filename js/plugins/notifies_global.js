/**
 *
 * Notifies
 *
 * Interface.Plugins.Notify page content scripts. Initialized from scripts.js file.
 *
 *
 */

class Notifies {
    constructor() {
        // Initialization of the page plugins
        if (!jQuery.notify) {
            console.log("notify is null!");
            return;
        }

        this._initProgress();
    }

    // Notification with progress bar
    _initProgress() {
        jQuery("#notifyButtonProgress").on("click", (event) => {
            event.preventDefault();
            jQuery.notify(
                { title: "Hello World!", message: "Here is a notification." },
                { type: "primary", showProgressbar: true }
            );
        });
    }
}
