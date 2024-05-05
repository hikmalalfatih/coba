function clickButton(){
    const harimau = document.querySelectorAll('.harimau');
    const domba = document.querySelectorAll('.domba');
    const loveAnimation = document.querySelectorAll('.love-animation');

    const button = document.querySelector('.btn');
    const borderDiv = document.querySelector('.border');

    harimau.forEach((nodelist) => {
        nodelist.classList.toggle('transition-out');
    });

    domba.forEach((nodelist) => {
        nodelist.classList.toggle('transition-out');
    });

    button.classList.toggle('transition-out');

    setTimeout(() => {
        harimau.forEach((nodelist) => {
            nodelist.classList.toggle('hide');
            nodelist.classList.toggle('transition-out');
        });
    
        domba.forEach((nodelist) => {
            nodelist.classList.toggle('hide');
            nodelist.classList.toggle('transition-out');
        });

        button.classList.toggle('hide');
        borderDiv.classList.toggle('border-t-red-soft');
        borderDiv.classList.toggle('px-5');
        borderDiv.classList.toggle('py-2');
        button.classList.toggle('transition-out');


        loveAnimation.forEach((nodelist) => {
            nodelist.classList.toggle('hide');
            nodelist.classList.toggle('love');
        });
    }, 1500)

    
}
