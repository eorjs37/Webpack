import '../../css/index.css';
import '../../css/grid.css';
import '../../css/card.css';
import '../assets/1.jpg'
import '../assets/2.jpg'
import '../assets/3.jpg'



export function init(){
    const body =document.querySelector('body');

    const imageNumber = Math.floor((Math.random()*3)+1);
    
    body.style.backgroundRepeat="no-repeat";
    body.style.backgroundImage=`url(./assets/${imageNumber}.jpg)`;
    body.style.backgroundSize="cover";
    body.style.opacity="0.6";
    body.style.backgroundPosition="center";

    const main = document.createElement('main');
    main.classList.add('main-container');

    const mainitem = document.createElement('article');
    mainitem.classList.add('main-item');

    const gridcontainer = document.createElement('div');
    gridcontainer.classList.add('grid-container');

    mainitem.appendChild(gridcontainer);
    main.appendChild(mainitem);

    body.appendChild(main);
}