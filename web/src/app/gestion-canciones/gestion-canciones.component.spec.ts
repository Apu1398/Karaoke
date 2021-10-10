import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCancionesComponent } from './gestion-canciones.component';

describe('GestionCancionesComponent', () => {
  let component: GestionCancionesComponent;
  let fixture: ComponentFixture<GestionCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCancionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
