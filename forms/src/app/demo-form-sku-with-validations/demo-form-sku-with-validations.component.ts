import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  FormControl,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-demo-form-sku-with-validations',
  templateUrl: './demo-form-sku-with-validations.component.html',
  styleUrls: ['./demo-form-sku-with-validations.component.css']
})
export class DemoFormSkuWithValidationsComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  getSku() {
    return this.myForm.get('sku') as FormControl;
  }

  onSubmit(form: any): void {
    console.log('you submitted value', form);
  }

}
