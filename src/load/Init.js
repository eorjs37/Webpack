import '../assets/1.jpg'
import '../assets/2.jpg'
import '../assets/3.jpg'

export class init{ 
    constructor(imageNumber,main){
        this.imageNumber = Math.floor((Math.random()*3)+1);
        this.main  = document.querySelector('main.main-container');
    }

    setBackGroundImg(){
        this.main.style.backgroundImage=`url(./assets/${this.imageNumber}.jpg)`;
    }
}

