let navigation = document.querySelector('.navigation');

window, addEventListener('scroll', () => {
    // console.log(window.pageYOffset);
    if (window.pageYOffset != 0) {
        navigation.style.backgroundColor = "#000" 
    } else{
        navigation.style.backgroundColor = "#e76257"
    }
})