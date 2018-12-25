import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHuangdoudouComponent } from './table-huangdoudou.component';

describe('TableHuangdoudouComponent', () => {
  let component: TableHuangdoudouComponent;
  let fixture: ComponentFixture<TableHuangdoudouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableHuangdoudouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHuangdoudouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
