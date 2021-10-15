import { Component, OnInit } from '@angular/core';
import { CancionService } from '../services/cancion.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-gestion-canciones',
  templateUrl: './gestion-canciones.component.html',
  styleUrls: ['./gestion-canciones.component.css']
})
export class GestionCancionesComponent implements OnInit {

  constructor(private cancionService : CancionService,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.dataStorageService.fetchCanciones().
    subscribe( canciones => {
        
        this.cancionService.setCanciones(canciones);
        
    });
  }

}
