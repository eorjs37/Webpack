const body =document.querySelector('body');
function init(){
    const imageNumber = Math.floor((Math.random()*3)+1);

    console.log(imageNumber);
    body.style.backgroundRepeat="no-repeat";
    body.style.backgroundImage=`url(./images/${imageNumber}.jpg)`;
    body.style.backgroundSize="100%";
    body.style.opacity="0.6";
}

init();