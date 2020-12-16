import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataCiboService {

  constructor(private http: HttpClient) { }

  search(query: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=2&json=true`
    return this.http.get(url);
  }

  getProduct(productID: string){
    const url = `https://world.openfoodfacts.org/api/v0/product/${productID}`
    console.log(url)
    return this.http.get(url);
  }
}
