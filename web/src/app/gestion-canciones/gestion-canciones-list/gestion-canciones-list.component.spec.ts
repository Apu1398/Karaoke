import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCancionesListComponent } from './gestion-canciones-list.component';

describe('GestionCancionesListComponent', () => {
  let component: GestionCancionesListComponent;
  let fixture: ComponentFixture<GestionCancionesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCancionesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCancionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
