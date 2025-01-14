// Get the cup and liquid elements
const cup = document.querySelector('.cup');
const liquid = document.querySelector('.liquid');

// Function to update the cup's position and liquid fill based on scroll
function onScroll() {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const fillPercentage = Math.min(scrollPosition / maxScroll, 1); // Value between 0 and 1

    // Move the cup horizontally as you scroll (e.g., 200px to the right)
    const moveDistance = fillPercentage * 200; // 200px move to the right
    cup.style.transform = `translateX(${moveDistance}px)`;

    // Fill the cup with liquid based on the scroll position
    const liquidHeight = fillPercentage * 150; // 150px is the full height of the cup
    liquid.style.height = `${liquidHeight}px`;
}

// Listen for the scroll event
window.addEventListener('scroll', onScroll);
