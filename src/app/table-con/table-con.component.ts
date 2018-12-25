import { Component, OnInit } from '@angular/core';
import {Bac, Bc, Md} from '../../assets/mock-data/mock-data';
import {Basicy, Medicaly} from '../../assets/Entity/entity';

@Component({
  selector: 'app-table-con',
  templateUrl: './table-con.component.html',
  styleUrls: ['./table-con.component.scss']
})
export class TableConComponent implements OnInit {
  BS: Basicy[] = Bc;
  CS: Medicaly[] = Md;
  constructor() { }

  ngOnInit() {
  }

}
