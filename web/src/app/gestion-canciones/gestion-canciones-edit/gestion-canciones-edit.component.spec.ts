import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCancionesEditComponent } from './gestion-canciones-edit.component';

describe('GestionCancionesEditComponent', () => {
  let component: GestionCancionesEditComponent;
  let fixture: ComponentFixture<GestionCancionesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCancionesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCancionesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
