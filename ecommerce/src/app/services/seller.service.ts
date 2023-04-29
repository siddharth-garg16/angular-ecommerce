import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SellerInfo } from '../models/seller';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  sellerSignup(sellerInfo:SellerInfo) : Observable<SellerInfo> {
    return this.http.post<SellerInfo>("http://localhost:3000/sellers", sellerInfo);
  }
}
