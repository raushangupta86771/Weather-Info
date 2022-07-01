const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_details = document.getElementById('city_details');
const statuss = document.getElementById('status');
const temp = document.getElementById('temp');
const data_hide = document.querySelector('.middle_layer');


const getInfo = async (event) => {
    event.preventDefault();

    let cityVal = cityName.value;
    if (cityVal == "") {
        city_details.innerText = "Please write the City name";
        data_hide.classList.add('data_hide');
    } else {
        try {

            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a74946a2d3435b3bcfb166610c3fb7cd`;

            const res = await fetch(url);
            const cvrt = await res.json();
            const arrayData = [cvrt];
            console.log(arrayData);
            temp.innerText = `${arrayData[0].main.temp} °C`
            // statuss.innerText = arrayData[0].weather[0].main;
            city_details.innerText = `${arrayData[0].name} , ${arrayData[0].sys.country}`



            const tempMood = arrayData[0].weather[0].main;
            if (tempMood == "Clear") {
                statuss.innerHTML = '<i class="fa fa-sun" arial-hidden="true"></i>'
            }
            else if (tempMood == "Cloud") {
                statuss.innerHTML = '<i class="fas fa-cloud-rain" style="color: blue" ></i>'
            }
            else if (tempMood == "Haze") {
                statuss.innerHTML = '<i class="fas fa-smog" style="color: white" ></i>'
            }
            else if (tempMood == "Rain") {
                statuss.innerHTML = '<i class="fas fa-cloud-rain" style="color: blue" ></i>'
            }
            else {
                statuss.innerHTML = '<i class="fa fa-sun" style="color: yellow" ></i>'
            }

            data_hide.classList.remove('data_hide');
        }
        catch {
            city_details.innerText = "Write Correct City Name";
            data_hide.classList.add('data_hide');
        }
    }
};

submitBtn.addEventListener('click', getInfo);





const day = document.getElementById('day');
const today_date = document.getElementById('today_date');

const getCurrentDay = () => {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currDate = new Date();
    day.innerText = weekday[currDate.getDay()];
};


const gettoday_date = () => {
    const month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    var cur = new Date();
    var months = month[cur.getMonth()];
    var days = cur.getDate();
    today_date.innerText = `${days} ${months}`;
};



gettoday_date();
getCurrentDay();



