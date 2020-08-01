class OpenWeatherApi {
    fetchWeatherInfoByCityName = cityName => {
        const url = 'http://localhost:8080/weather-service/weathers?cityName=' + cityName;

        return fetch(url)
            .then(response => response.json());
    }
}

export default new OpenWeatherApi();