const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-items');
    const navItems = document.querySelectorAll('.nav-items li');

    
    burger.addEventListener('click',()=>{
        //toggle nav
        nav.classList.toggle('nav-active');
        
        //animate navItemsFade
        navItems.forEach((item, index)=>{
            if (item.style.animation) {
                item.style.animation = '';
            } else {
                item.style.animation = `navItemsFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //burger animation 
        burger.classList.toggle('toggle');
    });
        
}

navSlide();