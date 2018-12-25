import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableZiyuyuComponent } from './table-ziyuyu.component';

describe('TableZiyuyuComponent', () => {
  let component: TableZiyuyuComponent;
  let fixture: ComponentFixture<TableZiyuyuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableZiyuyuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableZiyuyuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
