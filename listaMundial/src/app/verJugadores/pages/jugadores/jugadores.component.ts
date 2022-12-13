import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/verJugadores/models';
import { Position } from 'src/app/verJugadores/models/position';
import {
  Posicion,
  ReqResResponse,
} from 'src/app/verJugadores/models/reqResResponse';
import { JugadoresService } from 'src/app/verJugadores/services/jugadores.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
})
export class JugadoresComponent implements OnInit {
  public jugadores: any = [];
  public form: FormGroup | undefined;

  constructor(
    private jugadoresService: JugadoresService,
    private router: Router,
    private formBuilder : FormBuilder  ) {}
  ngOnInit(): void {
    this.jugadoresService.cargarJugadores().subscribe((jugadores) => {
      // jugador : new Jugador(jugadores.id, jugadores.name, jugadores.lastName, jugadores.age, jugadores.team, jugadores.number, jugadores.position);
      this.jugadores = jugadores;
    });

    this.form = this.formBuilder.group({
      name: ["inputNombre", Validators.required],
      lastName: ["inputApellido", Validators.required],
      team: ["inputEquipo", Validators.required],
      age: ["inputEdad", Validators.required],
      position : ["posiciones", Validators.required]

    })
  }
}
