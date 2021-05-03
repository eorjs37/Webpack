const API_KEY = '58e9da005937758f4243219ec8dc3f2a';

const CITY = ['Ulsan','Busan','Seoul','Daegu','Incheon','Gwangju','Daejeon'];
const CITY_WEATHER = Array(CITY.length);

export function weatherinit(){
       cityWeather();
}

const dateFormat = (date) =>{
    const hour = date.getHours() < 10 ? '0'+date.getHours() : date.getHours();
    const time = date.getMinutes() < 10 ? '0' +date.getMinutes() : date.getMinutes();

    return hour + ' : ' +time;
}

const  createItem = () =>{
    const gridcontainer = document.querySelector('.grid-container');
    CITY_WEATHER.forEach(function(value,idx){
        //title
        const title = document.createElement('h2');
        title.classList.add('title');
        title.innerText = CITY[idx];

        //cityName
        const cityName = document.createElement('div');
        cityName.classList.add('cityname');
        cityName.appendChild(title);

        //tempair
        const temperature = document.createElement('div');
        temperature.classList.add('tempair');

        //p.title
        const tempTitle = document.createElement('p');
        tempTitle.classList.add('title');
        tempTitle.innerText='Temperature';
        temperature.appendChild(tempTitle);

        //온도
        const percent = document.createElement('p');
        percent.classList.add('percent');
        percent.innerText=value.main.temp;
        temperature.appendChild(percent);

        //습도
        const humidity = document.createElement('div');
        humidity.classList.add('airquality');

        //p.title
        const humidityTitle = document.createElement('p');
        humidityTitle.classList.add('title');
        humidityTitle.innerText='Humidity';
        humidity.appendChild(humidityTitle);

        //온도
        const humiditypercent = document.createElement('p');
        humiditypercent.classList.add('percent');
        if(value.main.humidity > 40) humiditypercent.classList.add('good');
        humiditypercent.innerText=value.main.humidity;
        humidity.appendChild(humiditypercent);


        //deatil
        const detail = document.createElement('div');
        detail.classList.add('current-detail');

        //detailWrapper
        const detailWrapper = document.createElement('div');
        detailWrapper.classList.add('detail-wrapper');
        detail.appendChild(detailWrapper);

        //detail-grid
        const deatilGrid =document.createElement('div');
        deatilGrid.classList.add('detail-grid');
        detailWrapper.appendChild(deatilGrid);

        //title
        const detailTitle =document.createElement('div');
        detailTitle.classList.add('title');
        deatilGrid.appendChild(detailTitle);

        const pTitle = document.createElement('p');
        pTitle.classList.add('title');
        pTitle.innerText='Current Detail';
        detailTitle.appendChild(pTitle);

        //detail-item1
        const detailItem1 =document.createElement('div');
        detailItem1.classList.add('detail-item1');
        deatilGrid.appendChild(detailItem1);

        const item1Contents = document.createElement('p');
        item1Contents.classList.add('contents');
        item1Contents.innerText='Surise';
        detailItem1.appendChild(item1Contents);

        //detail-item2
        const detailItem2 =document.createElement('div');
        detailItem2.classList.add('detail-item2');
        deatilGrid.appendChild(detailItem2);

        const item2Contents = document.createElement('p');
        item2Contents.classList.add('contents');
        const sunriseDate = new Date(value.sys.sunrise*1000);
        item2Contents.innerText = dateFormat(sunriseDate);
        detailItem2.appendChild(item2Contents);

        //detail-item3
        const detailItem3 =document.createElement('div');
        detailItem3.classList.add('detail-item3');
        deatilGrid.appendChild(detailItem3);

        const item3Contents = document.createElement('p');
        item3Contents.classList.add('contents');
        item3Contents.innerText='Sunset';
        detailItem3.appendChild(item3Contents);

        //detail-item4
        const detailItem4 =document.createElement('div');
        detailItem4.classList.add('detail-item4');
        deatilGrid.appendChild(detailItem4);

        const item4Contents = document.createElement('p');
        item4Contents.classList.add('contents');
        const sunsetDate = new Date(value.sys.sunset*1000);
        item4Contents.innerText = dateFormat(sunsetDate);
        detailItem4.appendChild(item4Contents);

        //card
        const card = document.createElement('div');
        card.classList.add('card');
        card.appendChild(cityName);
        card.appendChild(temperature);
        card.appendChild(humidity);
        card.appendChild(detail);

        //wrapper
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        wrapper.appendChild(card);

        //item
        const item = document.createElement('div');
        item.classList.add('item');
        item.appendChild(wrapper);
        
        gridcontainer.appendChild(item);
    })
}

async  function cityWeather(){
    let idx =0;
    for(const cityName of CITY){
        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
        .then(function(res){
            console.log(cityName);
            return res.json();
        })
        .then(function(json){
            CITY_WEATHER[idx]=json;
            idx++;
        })
        .catch(function(error){
            console.error('Error:', error)
        });
        
    }
    //item생성하기
    createItem();
}
