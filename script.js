document.getElementById('scare-button').addEventListener('click', function() {
    const scareSound = document.getElementById('scare-sound');
    const scareImage = document.getElementById('scare-image');

    // Play the scare sound
    scareSound.play();

    // Show the jump scare image
    scareImage.style.display = 'block';

    // Hide the image after 2 seconds
    setTimeout(() => {
        scareImage.style.display = 'none';
    }, 5000);
});