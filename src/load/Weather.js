import { Card } from "@/load/Weather/Card";
import { CardItem } from "@/load/Weather/CardItem";
const API_KEY = "58e9da005937758f4243219ec8dc3f2a";
const MAIN_ITEM = document.querySelector(".main-item");

const CITY = [
  "Seoul",
  "Ulsan",
  "Busan",
  "Daegu",
  "Incheon",
  "Gwangju",
  "Daejeon",
];
const CITY_WEATHER = Array(CITY.length);

export class Weather {
  constructor() {}

  dateFormat(date) {
    const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const time =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

    return hour + " : " + time;
  }

  async cityWeater() {
    let idx = 0;
    for (const cityName of CITY) {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        );
        const cityweather = await response.json();
        CITY_WEATHER[idx] = cityweather;
        idx++;
      } catch (e) {
        console.log(e);
      }
    }
    this.createItem();
  }

  createItem() {
    const card = new Card(MAIN_ITEM);
    card.render();

    CITY_WEATHER.forEach((value, idx) => {
      new CardItem(card.$self, value, idx);
    });
  }
}
