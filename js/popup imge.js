// [[[[[[[[[[[[[[ contion-nov ]]]]]]]]]]]]]]
document.querySelectorAll(".contion-img img").forEach(Image=>{
    Image.onclick =() =>{
        document.querySelector('.popup-img').style.display="block";
        document.querySelector('.popup-img img').src =Image.getAttribute('src');
    }
});
document.querySelector('.popup-img span').onclick =() =>{
    document.querySelector('.popup-img').style.display="none";
}

// [[[[[[[[[ contion-histery ]]]]]]]]]
document.querySelectorAll(".histrey-img-left img").forEach(Image=>{
    Image.onclick =() =>{
        document.querySelector('.popup-img').style.display="block";
        document.querySelector('.popup-img img').src =Image.getAttribute('src');
    }
});
document.querySelector('.popup-img span').onclick =() =>{
    document.querySelector('.popup-img').style.display="none";
}
// [[[[[[[[[[[[[[ product ]]]]]]]]]]]]]]
document.querySelectorAll(".product-nav img").forEach(Image=>{
    Image.onclick =() =>{
        document.querySelector('.popup-img').style.display="block";
        document.querySelector('.popup-img img').src =Image.getAttribute('src');
    }
});
document.querySelector('.popup-img span').onclick =() =>{
    document.querySelector('.popup-img').style.display="none";
}
// [[[[[[[[[[[[[[[[[ container-fluid Product-box2 ]]]]]]]]]]]]]]]]]
document.querySelectorAll(".Product-box2 img").forEach(Image=>{
    Image.onclick =() =>{
        document.querySelector('.popup-img').style.display="block";
        document.querySelector('.popup-img img').src =Image.getAttribute('src');
    }
});
document.querySelector('.popup-img span').onclick =() =>{
    document.querySelector('.popup-img').style.display="none";
}