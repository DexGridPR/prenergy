import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatIconRegistry} from '@angular/material/icon';
import {MatMenuModule, MatMenuTrigger, MatMenu} from '@angular/material/menu';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor( iconRegistry: MatIconRegistry ) { }

  ngOnInit(): void {
  }

  reg() {
    console.log("Open Regulator Portal");
    // this._gotodemo.reg();
  }

  cus() {
    console.log("Open Customer Portal");
    // this._gotodemo.cus();
  }

  gop() {
    console.log("Open Grid Operator Portal");
    // this._gotodemo.gop();
  }

}
