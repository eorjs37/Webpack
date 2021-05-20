// import '../../css/index.css';
// import 'Style/index.css'
import '../../css/index.css';
import '../../css/grid.css';
import '../../css/card.css';
import '../assets/1.jpg'
import '../assets/2.jpg'
import '../assets/3.jpg'



export function init(){
    const imageNumber = Math.floor((Math.random()*3)+1);
    const main = document.querySelector('main.main-container');
    main.style.backgroundImage=`url(./assets/${imageNumber}.jpg)`;
}
