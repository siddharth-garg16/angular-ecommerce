import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SellerInfo, SellerLogin } from '../models/seller';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  SELLER_ENDPOINT:string = "http://localhost:3000/sellers";

  constructor(private http: HttpClient) { }

  sellerSignup(sellerInfo:SellerInfo) : Observable<SellerInfo> {
    return this.http.post<SellerInfo>(`${this.SELLER_ENDPOINT}`, sellerInfo);
  }

  sellerLogin(sellerLogin:SellerLogin) : Observable<SellerInfo[]> {
    return this.http.get<SellerInfo[]>(`${this.SELLER_ENDPOINT}?email=${sellerLogin.email}&password=${sellerLogin.password}`)
  }
}
