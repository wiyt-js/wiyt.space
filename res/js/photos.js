// Showing photos once content is loaded
addEventListener("DOMContentLoaded", () => {
    let linkElements = document.getElementsByClassName('img-grid')[0].getElementsByTagName('a');
    for(let i = 0; i < linkElements.length; i++) {
        linkElements[i].onclick = function(event) {
            event.preventDefault();
            createPhoto(this.getAttribute('href'));
        };
    }
});

function createPhoto(link) {
    // Create elements
    const photoWrapper = document.createElement('div'),
        button = document.createElement('button'),
        image = document.createElement('img'),
        faIcon = document.createElement('i'),
        aInfo = document.createElement('a');
    let closeElements = [photoWrapper, button];

    // Define classes and variables
    photoWrapper.classList.add('photo-wrapper');
    faIcon.classList.add('fa-solid', 'fa-close', 'fa-2x');
    button.classList.add('photo-exit');
    closeElements.forEach(function(element) {
        element.addEventListener("click", function() {
            closeElement(photoWrapper);
        });
    });
    image.src = link;
    image.alt = "Photo";
    aInfo.href = link;
    elementZoom = image;

    // Add to main element
    button.prepend(faIcon);
    aInfo.appendChild(image);
    photoWrapper.appendChild(button);
    photoWrapper.appendChild(aInfo);
    document.getElementById('photos').appendChild(photoWrapper);
    disableScrolling();
}

function closeElement(element) { 
    if(element) {
        element.remove();
        elementZoom = null;
        enableScrolling();
    }
}

function disableScrolling() {
    document.body.style.overflow = "hidden";
    window.addEventListener('DOMMouseScroll', preventDefault);
    window.addEventListener('touchmove', preventDefault);
    window.addEventListener('keydown', preventDefaultForScrollKeys);
}

function enableScrolling() {
    document.body.style.overflow = "visible";
    window.removeEventListener('DOMMouseScroll', preventDefault);
    window.removeEventListener('touchmove', preventDefault);
    window.removeEventListener('keydown', preventDefaultForScrollKeys);
}