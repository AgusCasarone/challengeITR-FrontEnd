import { Component, OnInit } from '@angular/core';
import { Iplayer } from './iplayer';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent implements OnInit {

  players : Iplayer[] = [
    {
      id : 12,
      name : 'agus',
      lastName : 'casarone',
      age : 26,
      team : 'boquita',
      position : 'volante'
    },
    {
      id : 23,
      name : 'dibu',
      lastName : 'martinez',
      age : 30,
      team : 'argentina',
      position : 'arquero'
    },
    {
      id : 45,
      name : 'lio',
      lastName : 'messi',
      age : 34,
      team : 'argentina',
      position : 'delantero'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  deletePlayer(playerToDelete: Iplayer): void {
    this.players = this.players.filter(
      player => player !== playerToDelete
    )
  }

}
