document.addEventListener("DOMContentLoaded", function() {
    // Function to get a cookie by name
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Function to set a cookie
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Function to delete a cookie
    function deleteCookie(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }

    // Show the cookie consent banner if the cookie is not set
    if (!getCookie('cookieConsent')) {
        document.getElementById('cookie-consent').style.display = 'block';
    }

    // Handle the accept button click
    document.getElementById('accept-cookie').addEventListener('click', function() {
        setCookie('cookieConsent', 'accepted', 30); // Set cookie for 30 days
        document.getElementById('cookie-consent').style.display = 'none'; // Hide the banner
    });

    // Example: Add a button to reset the cookie (for testing purposes)
    document.getElementById('reset-cookie').addEventListener('click', function() {
        deleteCookie('cookieConsent');
        document.getElementById('cookie-consent').style.display = 'block'; // Show the banner again
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var learnMoreLink = document.querySelector('#cookie-consent a');
    var privacyPolicyModal = new bootstrap.Modal(document.getElementById('privacyPolicyModal'));

    if (learnMoreLink) {
      learnMoreLink.addEventListener('click', function(event) {
        event.preventDefault();
        privacyPolicyModal.show();
      });
    }
  });