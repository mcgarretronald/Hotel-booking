document.addEventListener('DOMContentLoaded', () => {
    getHotelRooms();
});

async function getHotelRooms() {
    try {
        const response = await fetch('rooms.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayHotels(data.hotels);
    } catch (error) {
        console.error('Failed to fetch hotel data:', error);
    }
}

function displayHotels(hotels) {
    const hotelsContainer = document.getElementById('hotels');
    hotels.forEach(hotel => {
        const hotelDiv = document.createElement('div');
        hotelDiv.className = 'hotel';

        const hotelImage = document.createElement('img');
        hotelImage.src = hotel.image;
        hotelImage.style.width = '300px';
        hotelImage.style.height = '300px';
        hotelImage.style.borderRadius = '20px 20px 0px 0px';
        hotelImage.alt = `${hotel.name} image`;

      

        const hotelPrice = document.createElement('p');
        hotelPrice.innerHTML = `<strong>Price</strong>: ${hotel.currency} ${hotel.price}`;
        hotelPrice.style.marginLeft = '5%';

        const hotelRating = document.createElement('p');
        hotelRating.innerHTML = `<strong>Rating</strong>: ${hotel.rating}`;
        hotelRating.style.marginLeft = '5%';

        const hotelAmenities = document.createElement('p');
        hotelAmenities.innerHTML = `<strong>Amenities</strong>: ${hotel.amenities.join(', ')}`;
        hotelAmenities.style.marginLeft = '5%';

        const hotelAvailability = document.createElement('p');
        hotelAvailability.innerHTML = `<strong>Availability</strong>: ${hotel.availability ? 'Available' : 'Not Available'}`;
        hotelAvailability.style.marginLeft = '5%';

        const button = document.createElement('button');
        button.textContent = 'Book Now';
        button.addEventListener('click', () => {
            if (hotel.availability) {
                localStorage.setItem('selectedHotel', JSON.stringify(hotel));
                window.location.href = 'booking.html';
            } else {
                button.textContent = 'Sorry, Room Not Available';
                button.disabled = true; // Optionally disable the button
            }
        });

        hotelDiv.appendChild(hotelImage);
      
        hotelDiv.appendChild(hotelPrice);
        hotelDiv.appendChild(hotelRating);
        hotelDiv.appendChild(hotelAmenities);
        hotelDiv.appendChild(hotelAvailability);
        hotelDiv.appendChild(button);

        hotelsContainer.appendChild(hotelDiv);
    });
}
