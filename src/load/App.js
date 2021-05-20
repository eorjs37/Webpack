import { init } from './Init' 

export class App{
    constructor(pInit){
        this.pInit = new init();
    }

    /* 최초 로드 */
    appLoad(){
        const imgNum = Math.floor((Math.random()*3)+1);
        const main = document.querySelector('main.main-container');

        const Init = new init(imgNum,main);
        Init.setBackGroundImg();
    }
}

