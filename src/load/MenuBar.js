export class MenuBar {
  constructor() {
    this.menuEvent();
  }

  menuEvent() {
    const hambugerMenu = document.querySelector("#hambuger-menu");
    const overlay = document.querySelector("#overlay");
    const menu = document.querySelector("#menubar");
    const exitIcon = document.querySelector("#exit-icon");

    /* 오픈 */
    hambugerMenu.addEventListener("click", () => {
      menu.style.width = `250px`;
      overlay.style.display = "block";
    });

    /* close */
    overlay.addEventListener("click", () => {
      overlay.style.display = "none";
      menu.style.width = `0`;
    });

    /* menu-icon close */
    exitIcon.addEventListener("click", () => {
      overlay.style.display = "none";
      menu.style.width = `0`;
    });
  }
}
