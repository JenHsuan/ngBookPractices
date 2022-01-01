import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from '../services/analytics-service.service';
import { AnalyticsImplementation, Metric } from './analytics-demo.interface';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: AnalyticsService,
      useFactory() {
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log(metric);
          }
        }

        return new AnalyticsService(loggingImplementation);
      }
    }
  ]
})
export class AnalyticsDemoModule { }
