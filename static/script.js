document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    let initialLoad = true;

    const animateText = () => {
        const cyber = document.querySelector('.cyber');
        const range = document.querySelector('.range');
        const development = document.querySelector('.development');

        // Restart the animations
        cyber.style.animation = 'none';
        range.style.animation = 'none';
        development.style.animation = 'none';

        requestAnimationFrame(() => {
            cyber.style.animation = '';
            range.style.animation = '';
            development.style.animation = '';
        });
    };

    const reloadContent = () => {
        const originalContent = container.innerHTML;
        container.innerHTML = '';
        requestAnimationFrame(() => {
            container.innerHTML = originalContent;
            animateText();
        });
    };

    // Initial animation
    animateText();

    // Reload content every 6 seconds
    setInterval(reloadContent, 8000);

    // Create a grid of rotating 0s and 1s as background
    const binaryContainer = document.querySelector('.binary-container');
    const numBinaryItems = 3584; // Adjust the number of binary items as needed

    for (let i = 0; i < numBinaryItems; i++) {
        const binary = document.createElement('div');
        binary.classList.add('binary');
        binary.textContent = Math.random() < 0.5 ? '0' : '1';
        binary.classList.add(i % 2 === 0 ? 'clockwise' : 'anticlockwise');
        binaryContainer.appendChild(binary);
    }

    function enterFullscreen() {
    const element = document.documentElement; // The element to be displayed in fullscreen
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else  
    if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();  
    }
}

    // Call the function when the page loads
    document.addEventListener('DOMContentLoaded', () => {
        enterFullscreen();
    });
});