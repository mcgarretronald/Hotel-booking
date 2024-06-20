document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);

    const firstName = params.get('firstName');
    const lastName = params.get('lastName');
    const roomType = params.get('roomType');
    const email = params.get('email');
    const noOfGuest = params.get('noOfGuest');
    const arrivalDate = params.get('arrivalDate');
    const arrivalTime = params.get('arrivalTime');
    const departureDate = params.get('departureDate');
    const freePickup = params.get('freePickup');
    const specialRequest = params.get('specialRequest');

    const invoiceDetails = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Room Type:</strong> ${roomType}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Number of Guests:</strong> ${noOfGuest}</p>
        <p><strong>Arrival Date:</strong> ${arrivalDate}</p>
        <p><strong>Arrival Time:</strong> ${arrivalTime}</p>
        <p><strong>Departure Date:</strong> ${departureDate}</p>
        <p><strong>Free Pickup:</strong> ${freePickup}</p>

    `;

    document.getElementById('invoiceDetails').innerHTML = invoiceDetails;
});
