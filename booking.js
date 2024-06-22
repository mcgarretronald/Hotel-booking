document.addEventListener('DOMContentLoaded', () => {
    displayHotelDetails();
});

function displayHotelDetails() {
    const hotel = JSON.parse(localStorage.getItem('selectedHotel'));
    if (hotel) {
        const hotelDetailsDiv = document.getElementById('hotelDetails');

        const hotelImage = document.createElement('img');
        hotelImage.src = hotel.image;
        hotelImage.alt = `${hotel.name} image`;
        hotelImage.style.width='300px'
        hotelImage.style.marginLeft='0px'

        const hotelPrice = document.createElement('p');
        hotelPrice.innerHTML = `<strong>Price</strong>: ${hotel.currency} ${hotel.price}`;

        const hotelAmenities = document.createElement('p');
        hotelAmenities.innerHTML = `<strong>Amenities</strong>: ${hotel.amenities.join(', ')}`;

        const hotelAvailability = document.createElement('p');
        hotelAvailability.innerHTML = `<strong>Availability</strong>: ${hotel.availability ? 'Available' : 'Not Available'}`;

        hotelDetailsDiv.appendChild(hotelImage);
        hotelDetailsDiv.appendChild(hotelPrice);
        hotelDetailsDiv.appendChild(hotelAmenities);
        hotelDetailsDiv.appendChild(hotelAvailability);
    } else {
        alert('No hotel selected.');
        window.location.href = 'rooms.html';
    }
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const roomType = document.getElementById('roomtype').value;
    const email = document.getElementById('email').value;
    const noOfGuest = document.getElementById('noOfGuest').value;
    const arrivalDate = document.getElementById('ArrivalDate').value;
    const arrivalTime = document.getElementById('time').value;
    const departureDate = document.getElementById('DepartureDate').value;
    const freePickup = document.querySelector('input[name="freepickup"]:checked').value;


    const queryString = `?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&roomType=${encodeURIComponent(roomType)}&email=${encodeURIComponent(email)}&noOfGuest=${encodeURIComponent(noOfGuest)}&arrivalDate=${encodeURIComponent(arrivalDate)}&arrivalTime=${encodeURIComponent(arrivalTime)}&departureDate=${encodeURIComponent(departureDate)}&freePickup=${encodeURIComponent(freePickup)}`;

    window.location.href = 'invoice.html' + queryString;
});


// ADMIN PAGE
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const booking = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        roomType: document.getElementById('roomtype').value,
        email: document.getElementById('email').value,
        noOfGuest: document.getElementById('noOfGuest').value,
        arrivalDate: document.getElementById('ArrivalDate').value,
        arrivalTime: document.getElementById('time').value,
        departureDate: document.getElementById('DepartureDate').value,
        freePickup: document.querySelector('input[name="freepickup"]:checked').value,
        specialRequest: document.getElementById('specialRequest').value
    };

    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    alert('Booking submitted successfully!');
    document.getElementById('bookingForm').reset();
});

