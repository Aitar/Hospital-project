import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { TableConComponent } from './table-con/table-con.component';
import { TableYuanjieComponent } from './table-yuanjie/table-yuanjie.component';
import { TableZiyuComponent } from './table-ziyu/table-ziyu.component';
import { TableZiyuyuComponent } from './table-ziyuyu/table-ziyuyu.component';
import { TableHuangdouComponent } from './table-huangdou/table-huangdou.component';
import { TableHuangdoudouComponent } from './table-huangdoudou/table-huangdoudou.component';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    TableConComponent,
    TableYuanjieComponent,
    TableZiyuComponent,
    TableZiyuyuComponent,
    TableHuangdouComponent,
    TableHuangdoudouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})

export class AppModule { }
