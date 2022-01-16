import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { FETCH_PRODUCTS_START } from '../types';
import { FetchProductsSuccess } from '../actions';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class FetchProductsEffect {
    @Effect()
    fetchProducts = this.actions$.pipe(
        ofType(FETCH_PRODUCTS_START),
        switchMap(() => {
            return this.http.get<Product[]>(`/api/products`)
                .pipe(
                    map(resData => {
                        return new FetchProductsSuccess(resData);
                    }),
                    catchError(error => {
                        console.log(error)
                        return of()
                    })
                )
        })
    )
    constructor(private actions$: Actions, private http: HttpClient) {}
}
