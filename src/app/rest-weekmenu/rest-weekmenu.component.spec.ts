import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestWeekmenuComponent } from './rest-weekmenu.component';

describe('RestWeekmenuComponent', () => {
  let component: RestWeekmenuComponent;
  let fixture: ComponentFixture<RestWeekmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestWeekmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestWeekmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
