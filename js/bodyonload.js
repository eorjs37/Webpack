const body =document.querySelector('body');
function init(){
    const imageNumber = Math.floor((Math.random()*3)+1);

    body.style.backgroundRepeat="no-repeat";
    body.style.backgroundImage=`url(./images/${imageNumber}.jpg)`;
    body.style.backgroundSize="cover";
    body.style.opacity="0.6";
    body.style.backgroundPosition="center";
}

init();