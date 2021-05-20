import 'ImagePath/1.jpg';
import 'ImagePath/2.jpg';
import 'ImagePath/3.jpg';
import {Weather} from 'Load/Weather';

export class init{ 
    constructor(imageNumber,main){
        this.imageNumber = Math.floor((Math.random()*3)+1);
        this.main  = document.querySelector('main.main-container');
        this.cityWeater  = new Weather();
    }

    setBackGroundImg(){
        this.main.style.backgroundImage=`url(./assets/${this.imageNumber}.jpg)`;
    }

    setCityWeater(){
        this.cityWeater.cityWeater();
    }
}

