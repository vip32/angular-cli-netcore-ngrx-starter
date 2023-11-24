import { Route } from '@angular/router';

import { WeatherForecastComponent } from './containers/weather-forecast/weather-forecast.component';
import { WeatherForecastStore } from './state/weather-forecast.store';

export const weatherForecastRoutes: Route[] = [
  {
    path: '',
    component: WeatherForecastComponent,
    providers: [WeatherForecastStore],
  },
];
