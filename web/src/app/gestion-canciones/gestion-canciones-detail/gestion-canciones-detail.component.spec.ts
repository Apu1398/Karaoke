import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCancionesDetailComponent } from './gestion-canciones-detail.component';

describe('GestionCancionesDetailComponent', () => {
  let component: GestionCancionesDetailComponent;
  let fixture: ComponentFixture<GestionCancionesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCancionesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCancionesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
