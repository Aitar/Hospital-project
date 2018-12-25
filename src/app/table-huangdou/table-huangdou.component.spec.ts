import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHuangdouComponent } from './table-huangdou.component';

describe('TableHuangdouComponent', () => {
  let component: TableHuangdouComponent;
  let fixture: ComponentFixture<TableHuangdouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableHuangdouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHuangdouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
