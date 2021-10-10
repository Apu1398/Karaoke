import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Cancion } from '../models/cancion.model';
import { DataStorageService } from '../shared/data-storage.service';
import { CancionService } from './cancion.service';



@Injectable({ providedIn: 'root' })
export class CancionResolverService implements Resolve<Cancion[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private cancionService: CancionService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const canciones = this.cancionService.getCanciones();

    if (canciones.length === 0) {
      return this.dataStorageService.fetchCanciones();
    } else {
      return canciones;
    }
  }
}