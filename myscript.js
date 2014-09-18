var videoContainer = document.getElementsByClassName("html5-main-video");

window.addEventListener('focus', function() {
    videoContainer[0].play();
});

window.addEventListener('blur', function() {
    videoContainer[0].pause();
});