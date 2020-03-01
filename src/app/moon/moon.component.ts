import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.scss']
})
export class MoonComponent implements OnInit {


  constructor() { }

  @Input()
  moons:number=5;

  MAX_MOON_NUMBER=10

  ngOnInit() {
  }

  get moonArray() {
    let moonArray= new Array(this.MAX_MOON_NUMBER).fill(false)
    return moonArray.map((_,idx) => idx < this.moons)
  }
}
