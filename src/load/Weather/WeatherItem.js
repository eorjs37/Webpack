const weather = document.createElement("div");
export class WeatherItem {
  constructor($parent) {
    this.$parent = $parent;
    weather.classList.add("card-item");
  }
}
