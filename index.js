const checkAvailabilityButton = document.querySelector('.checkavailability');
checkAvailabilityButton.addEventListener('click', () => {
    function showNotification(message) {
        checkAvailabilityButton.innerHTML = message;

        setTimeout(() => {
            checkAvailabilityButton.innerHTML = 'Check Availability'
        }, 2000);
    }

    showNotification('Room Not Available 😊.');
    
    
});
// ANAOTHER BUTTON
const AvailabilityButton = document.querySelector('#checkavailability');
AvailabilityButton.addEventListener('click', () => {
    function showNotification(message) {
        AvailabilityButton.innerHTML = message;

        setTimeout(() => {
            AvailabilityButton.innerHTML = 'Check Availability'
        }, 2000);
    }

    showNotification('Room Not Available 😊.');
    
    
});



// EVENTS// 
// Function to create event elements
function createEventElement(event) {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event');
    eventDiv.style.width='200px'

    const title = document.createElement('div');
    title.classList.add('event-title');
    title.textContent = event.eventName;
    eventDiv.appendChild(title);

    const date = document.createElement('div');
    date.classList.add('event-date');
    date.textContent = `Date: ${event.date}`;
    eventDiv.appendChild(date);

    const time = document.createElement('div');
    time.classList.add('event-time');
    time.textContent = `Time: ${event.time}`;
    eventDiv.appendChild(time);

    const location = document.createElement('div');
    location.classList.add('event-location');
    location.textContent = `Location: ${event.location}`;
    eventDiv.appendChild(location);

    const capacity = document.createElement('div');
    capacity.classList.add('event-capacity');
    capacity.textContent = `Capacity: ${event.capacity}`;
    eventDiv.appendChild(capacity);

    const description = document.createElement('div');
    description.classList.add('event-description');
    description.textContent = event.description;
    eventDiv.appendChild(description);

    return eventDiv;
}

// Function to load events into the page
function loadEvents() {
    const events = JSON.parse(localStorage.getItem('hotelEvents')) || [];
    const eventsContainer = document.getElementById('ourevents');
    eventsContainer.innerHTML = '';

    events.forEach(event => {
        const eventElement = createEventElement(event);
        eventsContainer.appendChild(eventElement);
    });
}

// Load events when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadEvents);
