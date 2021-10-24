import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnConfigComponent } from './btn-config.component';

describe('BtnConfigComponent', () => {
  let component: BtnConfigComponent;
  let fixture: ComponentFixture<BtnConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
