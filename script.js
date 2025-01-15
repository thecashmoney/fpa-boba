const cup = document.querySelector('.cup');
const liquid = document.querySelector('.liquid');
const disappearingScrollText = document.querySelector('.disappearOnScroll');

function onScroll() {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollLevel = Math.min(scrollPosition / maxScroll, 1);
    console.log(scrollLevel);
    if (scrollLevel < 0.5) {
        const moveDistance = scrollLevel * -1 * (window.innerWidth*0.7);
        cup.style.transform = `translateX(${moveDistance}px)`;

        const opacity = 1 - Math.min(scrollLevel / 0.5, 1);
        disappearingScrollText.style.opacity = opacity;
    }

    // const liquidHeight = scrollLevel * 150; // 150px is the full height of the cup
    // liquid.style.height = `${liquidHeight}px`;
}

window.addEventListener('scroll', onScroll);
