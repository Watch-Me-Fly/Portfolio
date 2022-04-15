
    "use strict";

    var currentImage = 0;
    var myphotos = 
        ["Images/Slides/1.webp", 
        "Images/Slides/2.jpeg", 
        "Images/Slides/3.webp", 
        "Images/Slides/4.webp", 
        "Images/Slides/5.webp", 
        "Images/Slides/6.jpg", 
        "Images/Slides/7.jpg"];
    var container = 
        document.getElementById('content');
    var nextBtn = 
        document.getElementById('next');
    var prevBtn = 
        document.getElementById('previous');

    function swapImage () {
        var newSlide = document.createElement('img');
        newSlide.src = `${myphotos[currentImage]}`;
        newSlide.className = "fadeinimg";
        container.appendChild(newSlide);
        if (container.children.length > 1) {
            container.removeChild(container.children[0]);
        }
    }
    nextBtn.addEventListener('click', function (event) {
        event.preventDefault();
        currentImage++;
        if (currentImage > (myphotos.length-1)) {
            currentImage = 0;
        }
        swapImage();
    });
    prevBtn.addEventListener('click', function (event) {
        event.preventDefault();
        currentImage--;
        if (currentImage < 0) {
            currentImage = myphotos.length-1;
        }
        swapImage();
    });
