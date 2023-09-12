import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabodyComponent } from './databody.component';

describe('DatabodyComponent', () => {
  let component: DatabodyComponent;
  let fixture: ComponentFixture<DatabodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatabodyComponent]
    });
    fixture = TestBed.createComponent(DatabodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
