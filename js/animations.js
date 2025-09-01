function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'block';

    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
        last = +new Date();

        if (+element.style.opacity < 1) {
            requestAnimationFrame(tick);
        }
    };

    requestAnimationFrame(tick);
}

function slideIn(element) {
    element.style.transform = 'translateX(-100%)';
    element.style.opacity = 0;
    element.style.display = 'block';

    let last = +new Date();
    const tick = function() {
        element.style.transform = 'translateX(0)';
        element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
        last = +new Date();

        if (+element.style.opacity < 1) {
            requestAnimationFrame(tick);
        }
    };

    requestAnimationFrame(tick);
}

function removeSection(section) {
    section.style.opacity = 1;

    const fadeOut = function() {
        section.style.opacity -= 0.1;
        if (section.style.opacity <= 0) {
            section.style.display = 'none';
        } else {
            requestAnimationFrame(fadeOut);
        }
    };

    requestAnimationFrame(fadeOut);
}