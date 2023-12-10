// Function to handle the "Book Now" button click
function bookNow() {
    try {
        // Get the current booking information
        var currentBookingInfo = document.getElementById("currentBooking").innerText;
        var currentBookingCost = document.getElementById("currentBookingCost").innerText;

        // Update overall booking information
        overallBookingCost += parseFloat(currentBookingCost.replace("LKR ", ""));
        var overallBookingInfo = document.getElementById("overallBooking");
        var overallBookingCostElement = document.getElementById("overallBookingCost");
        overallBookingInfo.innerText = "Hotel Bookings";
        overallBookingCostElement.innerText = "LKR " + overallBookingCost.toFixed(2);

        // Reset current booking information
        document.getElementById("currentBooking").innerText = "";
        document.getElementById("currentBookingCost").innerText = "LKR 0.00";

        // Update loyalty points
        updateLoyaltyPoints(0); // Pass 0 as the number of rooms for the reset

        // Display confirmation to the user
        alert("Booking confirmed!");
    } catch (error) {
        showError(error);
    }
}

function bookAdventure() {
    try {
        // Get the current booking information
        var currentBookingInfo = document.getElementById("currentBooking").innerText;
        var currentBookingCost = document.getElementById("currentBookingCost").innerText;

        // Update overall booking information
        overallBookingCost += parseFloat(currentBookingCost.replace("LKR ", ""));
        var overallBookingInfo = document.getElementById("overallBooking");
        var overallBookingCostElement = document.getElementById("overallBookingCost");
        overallBookingInfo.innerText = "Hotel Bookings";
        overallBookingCostElement.innerText = "LKR " + overallBookingCost.toFixed(2);

        // Reset current booking information
        document.getElementById("currentBooking").innerText = "";
        document.getElementById("currentBookingCost").innerText = "LKR 0.00";

        // Update loyalty points
        updateLoyaltyPoints(0); // Pass 0 as the number of rooms for the reset

        // Display confirmation to the user
        alert("Booking confirmed!");
    } catch (error) {
        showError(error);
    }
}