import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { toritoDto } from '../models/torito';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToritoService {

  constructor(private httpClient : HttpClient) { }

  getRecentToritos() : Observable<toritoDto[]>{
    
    // let headers : HttpHeaders = { };
  
    // return this.httpClient.post<toritoDto[]>("https://localhost:5001/Torito/GetRecent",null, headers );

    let post = this.httpClient.get<toritoDto[]>("https://localhost:5001/Torito/GetLastDay", { responseType: 'json' });
    return post;
  }
}
