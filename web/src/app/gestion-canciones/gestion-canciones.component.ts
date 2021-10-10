import { Component, OnInit } from '@angular/core';
import { CancionService } from '../services/cancion.service';

@Component({
  selector: 'app-gestion-canciones',
  templateUrl: './gestion-canciones.component.html',
  styleUrls: ['./gestion-canciones.component.css']
})
export class GestionCancionesComponent implements OnInit {

  constructor(private cancionService : CancionService) { }

  ngOnInit(): void {
   
  }

}
