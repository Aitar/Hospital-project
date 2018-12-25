import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConComponent } from './table-con.component';

describe('TableConComponent', () => {
  let component: TableConComponent;
  let fixture: ComponentFixture<TableConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
