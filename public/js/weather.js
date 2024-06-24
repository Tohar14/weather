


async function city_name_click() {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    const cityname = document.getElementById("city_name").value;
    const raw = JSON.stringify({
        "cityName": cityname
    });
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    let result = await fetch("/autocomp", requestOptions);
    result = await result.json();
    let cityCode = result.message;
    document.getElementById("citycode").innerHTML += `your city code is ${cityCode}`;
    await getDailyWeather(cityCode);
    await get_f_d_weather(cityCode);
}



async function getDailyWeather(cityCode) {
    const div_weather = document.getElementById("daily_weather");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
        "cityCode": cityCode
    });
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
   let result = await fetch("/w_d", requestOptions);
   result = await result.json();
   console.log(result);
   div_weather.innerHTML = JSON.stringify(result.message);
}

async function get_f_d_weather(cityCode){
    const div_weather = document.getElementById("f_d_weather");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
        "cityCode": cityCode
    });
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
   let  result = await fetch("/w_fd", requestOptions);
   result = await result.json();
   console.log(result);
   div_weather.innerHTML = JSON.stringify(result.message);
}








    









