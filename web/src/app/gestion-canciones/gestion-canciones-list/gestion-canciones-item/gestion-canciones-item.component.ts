import { Component, Input, OnInit } from '@angular/core';
import { Cancion } from 'src/app/models/cancion.model';

@Component({
  selector: 'app-gestion-canciones-item',
  templateUrl: './gestion-canciones-item.component.html',
  styleUrls: ['./gestion-canciones-item.component.css']
})
export class GestionCancionesItemComponent implements OnInit {

  @Input() cancion: Cancion;
  @Input() index: number;

  ngOnInit() {
  }
}