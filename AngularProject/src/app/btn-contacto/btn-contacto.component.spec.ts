import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnContactoComponent } from './btn-contacto.component';

describe('BtnContactoComponent', () => {
  let component: BtnContactoComponent;
  let fixture: ComponentFixture<BtnContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
