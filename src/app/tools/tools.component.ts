import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { round } from 'lodash';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  consAmount: number;
  panelAmount: number;
  cost: number;
  irradiance: number = 1700;
  panelWattage: number = 0.320;
  costperkW: number = 2200


  calcSystem(kwh) {
    console.log("Calculating system size of: " , kwh)
    // let kwAmount = kwh / this.irradiance
    let kwAmount = round(kwh / this.irradiance * 10) / 10
    let panels = round(kwAmount / this.panelWattage * 10) / 10
    let expense = round(kwAmount * this.costperkW)
    console.log("kwAmount: " , kwAmount)
    console.log("Amount of panels: ", panels)
    console.log("Cost of system: ", expense)
    this.consAmount = kwAmount
    this.panelAmount = panels
    this.cost = expense
  }

}
