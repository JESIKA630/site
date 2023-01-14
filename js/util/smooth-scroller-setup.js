import Smooth from 'smooth-scrolling'

const section = document.querySelector('#luxy');
const smooth = new Smooth({
    native: true,
    section: section,
    ease: 0.3
})

smooth.init()