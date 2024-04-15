class WeatherData {
    city;
    date;
    icon;
    description;
    temperature;
    constructor(city, date, icon, description, temperature) {
        this.city = city;
        this.date = date;
        this.icon = icon;
        this.description = description;
        this.temperature = temperature;
    }
}
export default WeatherData;
