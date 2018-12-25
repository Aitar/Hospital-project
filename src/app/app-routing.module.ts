import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableConComponent } from './table-con/table-con.component';
import { TableYuanjieComponent } from './table-yuanjie/table-yuanjie.component';
import {TableZiyuComponent} from './table-ziyu/table-ziyu.component';
import {TableZiyuyuComponent} from './table-ziyuyu/table-ziyuyu.component';
import { TableHuangdouComponent } from './table-huangdou/table-huangdou.component';
import { TableHuangdoudouComponent } from './table-huangdoudou/table-huangdoudou.component';

const routes: Routes = [{ path: '', redirectTo: '*/dashboard', pathMatch: 'full' },
  { path: 'yuge', component: TableConComponent },
  { path: 'yuanjie', component: TableYuanjieComponent },
  { path: 'ziyu', component: TableZiyuComponent },
  { path: 'ziyuyu', component: TableZiyuyuComponent },
  { path: 'huangdou', component: TableHuangdouComponent },
  { path: 'huangdoudou', component: TableHuangdoudouComponent },
  { path: '***', component: TableHuangdouComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
