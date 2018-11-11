import { Localizacao } from './../model/localizacao.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type':  'application/json'})
  }

  @Injectable({
    providedIn: 'root'
  })
  export class LocationService{

    constructor( private http: HttpClient){

    }

    private APIBaseUrl: string = 'http://192.168.25.154:8080/telefone/';
    

    getAllLocations(): Observable<any>{
      console.log(this.APIBaseUrl + 'buscar');
        return this.http.get(this.APIBaseUrl + 'buscar');
    }

    getLocation(id){

    }

    postLocation(location: Localizacao){
      let result: Observable<Object>;
      result = this.http.post(this.APIBaseUrl + 'cadastrar', location);
      return result;

    }

    deleteLocation(id){

    }


  }