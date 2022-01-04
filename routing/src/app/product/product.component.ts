import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { MoreinfoComponent } from '../moreinfo/moreinfo.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  id: string | undefined;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      console.log(this.id)
    })
  }

  goToProduct(id: string): void {
    this.router.navigate(['./', id], {
      relativeTo: this.route
    })
  }
}

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'more-info', component: MoreinfoComponent },
  { path: ':id', component: ProductComponent },
]
