const cup = document.querySelector('.cup');
const liquid = document.querySelector('.liquid');
const disappearingScrollText = document.querySelector('.disappearOnScroll');
const appearingScrollText = document.querySelectorAll('.appearOnScroll');
const firstStep = document.querySelector('.first');

function onScroll() {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    console.log(scrollPosition);

    //move cup
    if (scrollPosition < 225) {
        const moveDistance = (scrollPosition/220) * -1 * (window.innerWidth*0.3);
        cup.style.transform = `translateX(${moveDistance}px)`;

        const opacity = 1 - Math.min(scrollPosition / 200, 1);
        disappearingScrollText.style.opacity = opacity;
        appearingScrollText.forEach(text => {
            text.style.opacity = 1 - opacity;
        });
        firstStep.style.opacity = 1 - opacity;
    }

    //change text opacity
    else if (scrollPosition >= 227.5 && scrollPosition < 300) {
        const opacity = Math.min(scrollPosition / 0.2, 1);
        appearingScrollText.forEach(text => {
            text.style.opacity = opacity;
        });
        firstStep.style.opacity = opacity;
    }
    else if (scrollPosition > 300 && scrollPosition < 400) {
        liquidHeight = ((scrollPosition - 300)) * 1.45; // 150px is the full height of the cup
        liquid.style.height = `${liquidHeight}px`;
    }
}

window.addEventListener('scroll', onScroll);
