function openOverlay(imageSrc) {
    var overlay = document.getElementById('overlay');
    var overlayImage = document.getElementById('overlayImage');

    overlayImage.src = imageSrc;
    overlay.style.display = 'block';
}

function closeOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}