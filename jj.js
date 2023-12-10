// Room prices
const roomPrices = {
    single: 25000,
    double: 35000,
    triple: 40000,
  };
  
  // Diving prices
  const divingPrices = {
    localAdult: 5000,
    localChild: 2000,
    foreignAdult: 10000,
    foreignChild: 5000,
  };
  
  // Guide prices
  const guidePrices = {
    adult: 1000,
    child: 500,
  };
  
  // Current booking details
  let currentBookingDetails = [];
  
  // Overall booking costs
  let hotelAccommodationCost = 0;
  let adventureActivitiesCost = 0;
  let totalCost = 0;
  
  // Loyalty points
  let loyaltyPoints = 0;
  
  // Update current booking details
  function updateCurrentBookingDetails() {
    const roomType = document.getElementById('room-type').value;
    const numberOfAdults = parseInt(document.getElementById('number-of-adults').value);
    const numberOfChildren = parseInt(document.getElementById('number-of-children').value);
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);
    const hasWiFi = document.getElementById('wifi').checked;
    const viewPreference = document.getElementById('view-preference').value;
  
    // Calculate room cost
    let roomCost = roomPrices[roomType];
    if (numberOfChildren > 0) {
      roomCost += numberOfChildren * 5000; // Extra meal charge for kids
    }
  
    // Calculate extra bed cost
    const extraBedCost = numberOfAdults > 1 ? 8000 : 0;
  
    // Calculate total cost
    const bookingCost = roomCost + extraBedCost;
  
    // Update current booking details object
    const bookingDetails = {
      roomType,
      numberOfAdults,
      numberOfChildren,
      startDate,
      endDate,
      hasWiFi,
      viewPreference,
      bookingCost,
    };
  
    currentBookingDetails = bookingDetails;
  
    // Update current booking details table
    const bookingDetailsHTML = `
      <tr>
        <td><span class="math-inline">\{roomType\}</td\>
  <td\></span>{numberOfAdults} adults, <span class="math-inline">\{numberOfChildren\} children</td\>
  <td\></span>{startDate.toLocaleDateString()} - <span class="math-inline">\{endDate\.toLocaleDateString\(\)\}</td\>
  <td\></span>{bookingCost} LKR</td>
      </tr>
    `;
  
    document.getElementById('current-booking-details').innerHTML = bookingDetailsHTML;
  
    // Update overall booking costs
    updateOverallBookingCosts();
  }
  
  // Update overall booking costs
  function updateOverallBookingCosts() {
    hotelAccommodationCost = currentBookingDetails.bookingCost;
    adventureActivitiesCost = calculateAdventureActivitiesCost();
    totalCost = hotelAccommodationCost + adventureActivitiesCost;
  
    document.getElementById('hotel-accommodation-cost').textContent = hotelAccommodationCost.toLocaleString('en-LK', { style: 'currency', currency: 'LKR' });
    document.getElementById('adventure-activities-cost').textContent = adventureActivitiesCost.toLocaleString('en-LK', { style: 'currency', currency: 'LKR' });
    document.getElementById('total-cost').textContent = totalCost.toLocaleString('en-LK', { style: 'currency', currency: 'LKR' });
  }
  
  // Calculate adventure activities cost
  function calculateAdventureActivitiesCost() {
    // TODO: Implement adventure activities cost calculation
    return 0;
  }
  
  // Book now
  function bookNow() {
    // TODO: Implement book now functionality
    // - Add current booking details to overall booking
    // - Reset current booking details
    // - Update overall booking costs
  }
  
  // Book adventure
  function bookAdventure() {
    // TODO: Implement book adventure functionality
    // - Add adventure activities details to overall booking
    // - Reset adventure activities details
    // - Update overall booking costs
  }
  
  // Check loyalty points
  function checkLoyalty() {
    // TODO: Implement check loyalty functionality
    // - Calculate loyalty points based on overall booking cost
    // - Update loyalty points display
  }
  
  // Event listeners
  document.getElementById('room-type').addEventListener('change', updateCurrentBookingDetails);
  document.getElementById('number-of-adults').addEventListener('change', updateCurrentBookingDetails)