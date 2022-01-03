import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  id: string | undefined;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.id = params["id"];
      console.log(this.id)
    })
  }

  ngOnInit(): void {
  }

}
