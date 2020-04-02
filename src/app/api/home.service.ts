import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  static httpClient: any;
  constructor(private httpClient: HttpClient) { }
  public getHomeFilterData() {
    return this.httpClient.get('http://woopera.quintsofts.com/api/getoperas/en');
    // throw new Error("Method not implemented.");
  }
  public getSingleOperaById(operaId) {
    return this.httpClient.get('http://woopera.quintsofts.com/api/getoperas/en/' + operaId);
  }
  public getLibrettoByOpera(operaId) {
    return this.httpClient.get('http://woopera.quintsofts.com/api/getlibretto/en/' + operaId);
  }
}
