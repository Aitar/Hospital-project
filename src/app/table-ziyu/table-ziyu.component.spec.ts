import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableZiyuComponent } from './table-ziyu.component';

describe('TableZiyuComponent', () => {
  let component: TableZiyuComponent;
  let fixture: ComponentFixture<TableZiyuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableZiyuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableZiyuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
