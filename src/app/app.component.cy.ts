import { HttpClient, HttpHandler } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { WeatherService } from "./services/weather.service";

describe('AppComponent', () => {
    it('can moount', () => {
        cy.mount(AppComponent, {
            providers: [WeatherService, HttpClient, HttpHandler],
            imports: [AppComponent, BrowserAnimationsModule],
            declarations: [],
        });
    })
})