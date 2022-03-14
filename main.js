let animItems = document.querySelectorAll('._bgimage');

function animation() {
    for(let i = 0; i < animItems.length; i++) {
        let animItem = animItems[i];
        let animItemOffset = window.pageYOffset + animItem.getBoundingClientRect().top;
        let animItemHeight = animItem.clientHeight;
        
        let animStartPoint = window.innerHeight - animItemHeight/2;
        if (window.pageYOffset > animItemOffset - animStartPoint) {
            animItem.classList.add('_active');

        }
    }
}

window.addEventListener('scroll', animation);

setInterval(animation, 500);


let setContentElem = document.querySelectorAll('._set-content-elem');
// console.log(setContentElem);
for(let i of setContentElem) {
    console.log(i.clientHeight)
}
