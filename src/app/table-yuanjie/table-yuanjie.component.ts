import { Component, OnInit } from '@angular/core';
import {Bac, Bc, Ex} from '../../assets/mock-data/mock-data';
import {Basicy, Examine} from '../../assets/Entity/entity';

@Component({
  selector: 'app-table-yuanjie',
  templateUrl: './table-yuanjie.component.html',
  styleUrls: ['./table-yuanjie.component.scss']
})
export class TableYuanjieComponent implements OnInit {
  BS: Basicy[] = Bc;
  EX: Examine[] = Ex;
  constructor() { }

  ngOnInit() {
  }

}
