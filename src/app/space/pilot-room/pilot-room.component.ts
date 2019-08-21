import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.scss']
})
export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;

  constructor() { }

  ngOnInit() {
    this.pilots.push(new Pilot('Sharon Valerii', '/assets/Ork.png'));
    this.pilots.push(new Pilot('Karl Agathon', '/assets/pilot.png'));
  }

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
  }

}
