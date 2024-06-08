document.addEventListener('DOMContentLoaded', () => {
    // Set the duration for the loader (in milliseconds)
    const loaderDuration = 3000; // 3 seconds

    // Get references to the loader container and main heading elements
    const loaderContainer = document.querySelector('.loader-container');
    const mainHeading = document.getElementById('main-heading');

    // Set a timer to hide the loader and show the main heading
    setTimeout(() => {
        loaderContainer.style.display = 'none';
        mainHeading.style.display = 'flex';
    }, loaderDuration);
});
