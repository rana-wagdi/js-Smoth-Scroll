//change navigation style on scroll

window.addEventListener('scroll',event =>{
    let nav=document.querySelector('.navbar');
    (window.scrollY >=44)? nav.classList.add('scroll'):nav.classList.remove('scroll');
});

//active navigation on scroll
window.addEventListener('scroll',event =>{
    let navigationLinks=document.querySelectorAll('nav ul li a');
    let fromTop=window.scrollY;

    navigationLinks.forEach(link =>{
        let section = document.querySelector(link.hash);

        if(
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop 
        ){
            link.classList.add('active');
        } else{
            link.classList.remove('active');
        }
    })
})