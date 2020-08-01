class CityListApi {
    fetchAvailableCities = () => fetch('http://localhost:8080/weather-service/available-cities')
        .then(response => response.json());
}

export default new CityListApi();