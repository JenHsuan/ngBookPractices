import { Injectable } from '@angular/core';
import {
  Metric,
  AnalyticsImplementation
} from '../analytics-demo/analytics-demo.interface';
import { Inject } from '@angular/core';

@Injectable()
export class AnalyticsService {
  constructor(@Inject(Object) private implementation: AnalyticsImplementation) { }

  record(metric: Metric): void {
    this.implementation.recordEvent(metric)
  }
}

