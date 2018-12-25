import { Component, OnInit } from '@angular/core';
import {Patient} from '../../assets/Entity/entity';
import {patients} from '../../assets/mock-data/mock-data';

@Component({
  selector: 'app-table-huangdou',
  templateUrl: './table-huangdou.component.html',
  styleUrls: ['./table-huangdou.component.scss']
})
export class TableHuangdouComponent implements OnInit {
  patient: Patient[] = patients;
  constructor() { }
  i = 1;
  editCache = {};
  dataSet = [];
  //————对患者进行编辑的方法————
  startEdit(key: string): void {
    this.editCache[ key ].edit = true;
  }

  cancelEdit(key: string): void {
    this.editCache[ key ].edit = false;
  }

  saveEdit(key: string): void {
    const index = this.dataSet.findIndex(item => item.key === key);
    Object.assign(this.dataSet[ index ], this.editCache[ key ].data);
    // this.dataSet[ index ] = this.editCache[ key ].data;
    this.editCache[ key ].edit = false;
  }

  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[ item.key ]) {
        this.editCache[ item.key ] = {
          edit: false,
          data: { ...item }
        };
      }
    });
  }
  //————对患者进行编辑的方法————

  ngOnInit() {
  }

}
