import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'form'
  })

export class FormService {

    constructor(private http : HttpClient) {}

    

  }
