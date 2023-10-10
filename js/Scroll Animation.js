const observer =new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entries)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements =document.querySelectorAll('.contact-item-right-top');
hiddenElements.forEach((el) => observer.observe(el));
