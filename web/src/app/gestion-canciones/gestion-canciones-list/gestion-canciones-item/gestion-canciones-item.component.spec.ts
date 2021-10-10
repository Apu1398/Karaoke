import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCancionesItemComponent } from './gestion-canciones-item.component';

describe('GestionCancionesItemComponent', () => {
  let component: GestionCancionesItemComponent;
  let fixture: ComponentFixture<GestionCancionesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCancionesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCancionesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
