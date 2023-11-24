import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { of } from 'rxjs';

import { WeatherForecastService } from '../services/weather-forecast.service';
import { weatherForecasts } from '../services/weather-forecast.service.spec';
import { WeatherForecastStore } from './weather-forecast.store';

describe('WeatherForecastService', () => {
  let service: WeatherForecastService;
  let store: InstanceType<typeof WeatherForecastStore>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatSnackBarModule],
      providers: [
        [WeatherForecastStore],
        { provide: 'BASE_URL', useValue: '' },
      ],
    });

    store = TestBed.inject(WeatherForecastStore);
    service = TestBed.inject(WeatherForecastService);
  });

  it('WeatherForecastStore.getForecasts() should return data', () => {
    jest
      .spyOn(service, 'getForecasts')
      .mockReturnValue(of([weatherForecasts[0]]));
    store.getForecasts(1);

    expect(store.entities()).toEqual([weatherForecasts[0]]);
  });

  it('WeatherForecastStore.getForecasts(count) should return data of length count', () => {
    jest.spyOn(service, 'getForecasts').mockReturnValue(of(weatherForecasts));
    store.getForecasts(10);
    expect(store.entities().length).toBe(10);
  });
});
