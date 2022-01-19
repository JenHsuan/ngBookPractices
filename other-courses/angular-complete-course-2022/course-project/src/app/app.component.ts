import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'course-project';
  loaedFeature = 'recipe'
  onNavigate(feature: string) {
    this.loaedFeature = feature;
  }
}
