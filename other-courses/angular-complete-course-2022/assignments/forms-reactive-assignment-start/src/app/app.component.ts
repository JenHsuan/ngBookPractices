import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

enum StatusEnum {
  Stable = 'Stable',
  Critical = 'Critical',
  Finished = 'Finished'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  forbiddenProjects = ['Test'];
  projectStatus = Object.keys(StatusEnum)

  signupForm = new FormGroup({
    'project': new FormControl(null, [
      Validators.required
    ],
    this.forbiddenProjectNames.bind(this)),
    'email': new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    'status': new FormControl(StatusEnum.Stable),
  })

  forbiddenProjectNames(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'forbiddenProject': true})
        } else {
          resolve(null);
        }
      }, 1000)
    })
    return promise;
  }

  onSubmit() {
    console.log(this.signupForm)
  }
}
