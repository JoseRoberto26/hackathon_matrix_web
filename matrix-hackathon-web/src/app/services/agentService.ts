import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type':  'application/json'})
  }

  @Injectable({
    providedIn: 'root'
  }
  )
  export class AgentService{

    constructor( private http: HttpClient){

    }

    private APIBaseUrl: string = 'http://192.168.25.154:8080/agent/';
    

    getAllAgentLocations(): Observable<any>{
        return this.http.get(this.APIBaseUrl + 'buscar');
    }

  }