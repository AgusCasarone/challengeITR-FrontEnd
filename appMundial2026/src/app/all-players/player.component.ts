import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iplayer } from './iplayer';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() player: Iplayer | undefined;

  @Output() playerDelete = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClicked() : void {
    this.playerDelete.emit();
  }

}
