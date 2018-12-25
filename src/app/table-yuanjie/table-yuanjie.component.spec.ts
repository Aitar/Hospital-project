import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableYuanjieComponent } from './table-yuanjie.component';

describe('TableYuanjieComponent', () => {
  let component: TableYuanjieComponent;
  let fixture: ComponentFixture<TableYuanjieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableYuanjieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableYuanjieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
