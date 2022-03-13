let animItems = document.querySelectorAll('._bgimage');

function animation() {
    for(let i = 0; i < animItems.length; i++) {
        let animItem = animItems[i];
        let animItemOffset = window.pageYOffset + animItem.getBoundingClientRect().top;
        let animItemHeight = animItem.clientHeight;
        
        let animStartPoint = window.innerHeight - animItemHeight/2;
        console.log(animStartPoint);
        if (window.pageYOffset > animItemOffset - animStartPoint) {
            animItem.classList.add('_active');

        }
    }
}

window.addEventListener('scroll', animation);

setInterval(animation, 500);