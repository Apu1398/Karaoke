import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cancion } from 'src/app/models/cancion.model';
import { CancionService } from 'src/app/services/cancion.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-gestion-canciones-detail',
  templateUrl: './gestion-canciones-detail.component.html',
  styleUrls: ['./gestion-canciones-detail.component.css']
})
export class GestionCancionesDetailComponent implements OnInit {
  cancion: Cancion;
  id: number;

  constructor(private cancionService: CancionService,
              private route: ActivatedRoute,
              private router: Router,
              private dataStorageService: DataStorageService
              ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.cancion = this.cancionService.getCancion(this.id);
        }
      );
  }


  /**
  * @name onEditSong()
  * @description Sets the link to 'edit'. 
  */
  onEditSong() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  /**
  * @name onDeleteSong()
  * @description Deletes the current song.
  */
  onDeleteSong() {
      console.log(this.cancion);
      this.router.navigate(['/gestion-canciones']);
      this.dataStorageService.deleteSong(this.cancion._id);
    
    
  }

}