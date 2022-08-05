import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // CREATE PRODUCT
  postProduct(data: any) {
    return this.http.post<any>('http://localhost:3000/productList/', data);
  }

  // GET ALL PRODUCTS
  getProducts() {
    return this.http.get<any>('http://localhost:3000/productList/');
  }

  // GET A PRODUCT
  getProduct(id: number | string) {
    // return this.http.get<any>(`http://localhost:3000/productList/${id}`);

    return this.getProducts().pipe(
      // (+) before `id` turns the string into a number
      map(
        (products: any) => products.find((product: any) => product.id === +id)!
      )
    );
  }

  // UPDATE PRODUCT
  putProduct(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/productList/' + id, data);
  }

  // DELETE PRODUCT
  deleteProduct(id: number) {
    return this.http.delete<any>('http://localhost:3000/productList/' + id);
  }
}
