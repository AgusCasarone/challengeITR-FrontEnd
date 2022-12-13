import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReqResResponse , Position, Jugador} from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor(private http : HttpClient) {}

  cargarJugadores() {

    const url = 'http://localhost:8080/players';

    return this.http.get<ReqResResponse>( url )

    }


}
