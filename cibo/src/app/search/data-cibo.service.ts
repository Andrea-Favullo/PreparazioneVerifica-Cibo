import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataCiboService {

  //https://world.openfoodfacts.org/api/v0/product/[barcode].json
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://world.openfoodfacts.org/api/v0/product/${query}.json`;
    //const headers = new HttpHeaders({Authorization: environment.oauthToken});
    let obsTracks = this.http.get(url, /*{ headers }*/);
    return obsTracks;
    //Ritorno un observable ai componenti che richiedono il servizio
  }
}
