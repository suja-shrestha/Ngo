function redirectToEsewa(paymentUrl) {
    window.location.href = paymentUrl;
}

document.getElementById('donation-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const amount = document.getElementById('donation-amount').value;

    const esewaUrl = `https://esewa.com.np/epay/main?amt=${amount}&pid=yourProductID&scd=9810129627&su=successUrl&fu=failureUrl`;

    redirectToEsewa(esewaUrl);
});
