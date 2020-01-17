import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class HttpClientService {
  constructor(private httpClient: HttpClient) {
  }

  getUpdating(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
  }
}
