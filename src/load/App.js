import { init } from "./Init";
import "ImagePath/icon/computer.svg";
import "ImagePath/icon/github.svg";
import "ImagePath/icon/phone.svg";
import "ImagePath/icon/gmail.svg";
import "ImagePath/icon/left-arrow.svg";

export class App {
  constructor() {
    this.pInit = new init();
  }

  /* 최초 로드 */
  appLoad() {
    const imgNum = Math.floor(Math.random() * 3 + 1);
    const main = document.querySelector("main.main-container");
  }
}
