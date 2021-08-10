import "ImagePath/weather/sun.svg";
export class WeatherIcon {
  constructor() {
    const img = document.createElement("img");
    img.classList.add("sunny");
    this.$img = img;
  }
}
