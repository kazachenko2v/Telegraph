let animItems = document.querySelectorAll('._anim-item');

function animation() {
    for(let i = 0; i < animItems.length; i++) {
        let animItem = animItems[i];
        let topPosition = window.pageYOffset + animItem.getBoundingClientRect().top;
        let itemHeight = animItem.clientHeight;
        
        let animStartPoint = window.pageYOffset - itemHeight/2;
        // console.log(window.pageYOffset);
        if (window.pageYOffset > topPosition - itemHeight/4) {
            console.log('START!!!!!!!!!!!!!!!!');
            animItem.classList.add('_active');

        }
    }
} 


window.addEventListener('scroll', animation);

// setInterval(animation, 500);