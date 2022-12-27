import { Component, OnInit } from '@angular/core';
import { AllPlayersService } from './all-players.service';
import { Iplayer } from './iplayer';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css'],
})
export class AllPlayersComponent implements OnInit {

  get players(): Iplayer[] {
    return this.allPlayerService.players;
  }

  constructor(
    private allPlayerService:AllPlayersService
    ) {}

  ngOnInit(): void {}

  deletePlayer(playerToDelete: Iplayer): void {
    this.allPlayerService.deletePlayer(playerToDelete);
  }
}
