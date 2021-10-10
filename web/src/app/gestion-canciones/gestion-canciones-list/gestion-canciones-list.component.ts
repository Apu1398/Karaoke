import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cancion } from 'src/app/models/cancion.model';
import { CancionService } from 'src/app/services/cancion.service';

@Component({
  selector: 'app-gestion-canciones-list',
  templateUrl: './gestion-canciones-list.component.html',
  styleUrls: ['./gestion-canciones-list.component.css']
})
export class GestionCancionesListComponent implements OnInit {
  canciones: Cancion[];
  subscription: Subscription;

  constructor(private cancionService: CancionService,
              private router: Router,
              private route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.subscription = this.cancionService.cancionesChanged
      .subscribe(
        (canciones: Cancion[]) => {
          this.canciones = canciones;
        }
      );
    this.canciones = this.cancionService.getCanciones();
  }

  /**
  * @name onNewCancion
  * @description Sets the link to 'new'
  */
  onNewSong() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}