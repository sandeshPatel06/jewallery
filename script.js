// Select all buy now buttons
const buttons = document.querySelectorAll('.buy-button');

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Thank you for choosing to buy! Proceed to checkout.");
        console.log('ff')
    });
});
