import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { model } from '../models/model.model';
import { HttpHeaders } from '@angular/common/http';

import headersHttpJson from '../utils/HeadersHttpJson'





@Injectable({
  providedIn: 'root'
})


export class TasksService {

  credentials = headersHttpJson()
  
  url = "https://teste123.com/end_point"



  constructor( private http: HttpClient) { }




  listarTodos(): Observable<model[]> {
    return this.http.get<model[]>(this.url, {
     headers: credentials
    })
  }


}
