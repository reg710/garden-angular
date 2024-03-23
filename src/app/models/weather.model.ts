export class WeatherReport {
    locationName: string;
    data: IWeatherData[];

    constructor(input: any) {
        this.locationName = input.locationName;
        this.data = input.data;
    }
}

export interface IWeatherData {
    datetimeStr: string;
    precipitation: number
}
