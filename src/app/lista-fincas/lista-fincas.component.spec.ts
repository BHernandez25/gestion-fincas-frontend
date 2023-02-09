import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFincasComponent } from './lista-fincas.component';

describe('ListaFincasComponent', () => {
  let component: ListaFincasComponent;
  let fixture: ComponentFixture<ListaFincasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFincasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFincasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
