import { Component, OnInit } from '@angular/core';
import {Basic, Pregnancy} from '../../assets/Entity/entity';
import {Bac, Pre} from '../../assets/mock-data/mock-data';

@Component({
  selector: 'app-table-ziyu',
  templateUrl: './table-ziyu.component.html',
  styleUrls: ['./table-ziyu.component.scss']
})
export class TableZiyuComponent implements OnInit {
  patient: Pregnancy[] = Pre;
  BS: Basic[] = Bac;
  constructor() { }

  ngOnInit() {
  }

}
