import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FincaDetallesComponent } from './finca-detalles.component';

describe('FincaDetallesComponent', () => {
  let component: FincaDetallesComponent;
  let fixture: ComponentFixture<FincaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FincaDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FincaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
