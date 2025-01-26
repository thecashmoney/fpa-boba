const cup = document.querySelector('.cup');
const liquid = document.querySelector('.liquid');
const disappearingScrollText = document.querySelector('.disappearOnScroll');
const appearingScrollText = document.querySelectorAll('.appearOnScroll');
const boba = document.querySelectorAll('.boba');
const straw = document.querySelector('.straw');
const disappearAtEnd = document.querySelectorAll('.disappearAtEnd');
const appearAtEnd = document.querySelectorAll('.appearAtEnd');

function onScroll() {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    console.log(scrollPosition);

    //move cup
    if (scrollPosition < 225) {
        const moveDistance = (scrollPosition/220) * -1 * (window.innerWidth*0.3);
        cup.style.transform = `translateX(${moveDistance}px)`;
        cup.style.top = `${45-(scrollPosition/20)}%`;

        const opacity = 1 - Math.min(scrollPosition / 200, 1);
        disappearingScrollText.style.opacity = opacity;
        appearingScrollText.forEach(text => {
            text.style.opacity = 1 - opacity;
        });
    }

    //change text opacity
    else if (scrollPosition >= 227.5 && scrollPosition < 300) {
        const opacity = Math.min(scrollPosition / 0.2, 1);
        appearingScrollText.forEach(text => {
            text.style.opacity = opacity;
        });
    }

    //fill with liquid
    else if (scrollPosition > 500 && scrollPosition < 800) {
        liquidHeight = 105-((scrollPosition - 500)/3.8);
        liquid.style.top = `${liquidHeight}%`;
    }

    //add boba
    else if (scrollPosition > 1200 && scrollPosition < 1600) {
        boba.forEach((boba, index) => {
            bobaHeight = 120-((scrollPosition - 1200)/(3.4 + index/20));
            boba.style.bottom = `${bobaHeight}%`;

            const opacity = Math.min((scrollPosition - 1200)/400, 0.7);
            boba.style.opacity = opacity;
        });
    }

    else if (scrollPosition > 1600 && scrollPosition < 2000) {
        //move cup to center
        const cupTransform = Math.max(scrollPosition-2200, -300);
        cup.style.transform = `translateX(${cupTransform}px)`;
        straw.style.transform = `translateX(${cupTransform-30}px)`;
        straw.style.top = `${(scrollPosition-1950)/2.5}%`;
        console.log(scrollPosition-1980)

        //disappear text at top
        const opacity = 1 - Math.min((scrollPosition - 1800) / 200, 1);
        disappearAtEnd.forEach(text => {
            text.style.opacity = opacity;
        });
        straw.style.opacity = 1 - opacity;
        appearAtEnd.forEach(text => {
            text.style.opacity = 1 - opacity;
        });
    }

}

window.addEventListener('scroll', onScroll);
