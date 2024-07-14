function scrollRight(id) {
    const scrollContainer = document.getElementById(id);
    scrollContainer.scrollBy({
        top: 0,
        left: 300, // Adjust the scroll length as needed
        behavior: 'smooth', // This will animate the scrolling
    });
}
function scrollLeft(id) {
    const scrollContainer = document.getElementById(id);
    scrollContainer.scrollBy({
        top: 0,
        left: -300, // Adjust the scroll length as needed
        behavior: 'smooth', // This will animate the scrolling
    });
}

export { scrollLeft, scrollRight }