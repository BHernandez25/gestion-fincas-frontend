import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarFincaComponent } from './registrar-finca.component';

describe('RegistrarFincaComponent', () => {
  let component: RegistrarFincaComponent;
  let fixture: ComponentFixture<RegistrarFincaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarFincaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarFincaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
