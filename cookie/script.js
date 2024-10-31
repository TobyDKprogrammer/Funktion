function checkCookieConsent() {
    // Check if the consent has already been given
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        document.getElementById('cookiePopup').style.display = 'flex';
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookiePopup').style.display = 'none';
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    document.getElementById('cookiePopup').style.display = 'none';
}

// Run the check on page load
window.onload = checkCookieConsent;