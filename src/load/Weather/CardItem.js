import { WeatherIcon } from "@/load/Weather/WeatherItem/WeatherIcon";
export class CardItem {
  constructor($parent, value, idx) {
    const cardItem = document.createElement("div");
    const weather = document.createElement("div");
    const h1 = document.createElement("h1");
    this.$parent = $parent;
    console.log(idx);

    h1.textContent = value.name;
    h1.classList.add("title");

    weather.classList.add("weather");
    weather.appendChild(h1);
    weather.appendChild(new WeatherIcon().$img);

    cardItem.classList.add("card-item");
    cardItem.appendChild(weather);

    this.$parent.appendChild(cardItem);
  }
}
