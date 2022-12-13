import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/verJugadores/models';
import { Position } from 'src/app/verJugadores/models/position';
import { Posicion, ReqResResponse } from 'src/app/verJugadores/models/reqResResponse';
import { JugadoresService } from 'src/app/verJugadores/services/jugadores.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
})
export class JugadoresComponent implements OnInit {

  public jugadores: any = [];

  position = Position

  selectedPositionList : Position[] = [this.position.Arquero, this.position.Defensor, this.position.Volante, this.position.Delantero];

  arquero = Position.Arquero;
  defensor = Position.Defensor;
  volante = Position.Volante;
  delantero = Position.Delantero;

  pushPositionsToArray(position : Position){
    this.selectedPositionList.push(position);
  }


  crearJugadorForm = new FormGroup({
    name : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    team : new FormControl('', Validators.required),
    age : new FormControl('', Validators.required),
    selectedPositions : new FormControl('', Validators.required)
  })

  constructor(
    private jugadoresService: JugadoresService,
    private router: Router,
    private formBuilder: FormBuilder,

  ) {}

  ngOnInit(): void {
    this.jugadoresService.cargarJugadores().subscribe((jugadores) => {
      // jugador : new Jugador(jugadores.id, jugadores.name, jugadores.lastName, jugadores.age, jugadores.team, jugadores.number, jugadores.position);
      this.jugadores = jugadores;
    });
  }

  onCrearJugador(form : FormGroup) {
     const name = this.crearJugadorForm.get("name").value;
     const lastName = this.crearJugadorForm.get("lastName").value;
     const team = this.crearJugadorForm.get("team").value;
     const age = this.crearJugadorForm.get("age").value;
     const selectedPositions = this.crearJugadorForm.get("selectedPositions").value;
  }



}
