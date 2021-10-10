import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CancionService } from 'src/app/services/cancion.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-gestion-canciones-edit',
  templateUrl: './gestion-canciones-edit.component.html',
  styleUrls: ['./gestion-canciones-edit.component.css']
})
export class GestionCancionesEditComponent implements OnInit {
  id: number;
  editMode = false;
  cancionForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private cancionService: CancionService,
    private router: Router,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  

  

  /**
  * @name onSubmit()
  * @description Depending if its edit mode or add new song mode it will update or add the current song.
  */
  onSubmit() {
    if (this.editMode) {
      if (1==1){ // FALTA HACER VERIFICACION CON TOKEN
        this.dataStorageService.updateCancion(this.cancionForm.value);

      }

    } else { 
      if (1==1) { // FALTA HACER VERIFICACION CON TOKEN
        this.dataStorageService.storeSong(this.cancionForm.value);
      }
    }
    this.onCancel();
  }


  /**
  * @name onCancel()
  * @description Returns the link to its previous link.
  */
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  /**
  * @name initForm()
  * @description If it's edit mode it will load the inputs of the form with the preexistent values of the song. Otherwise
  * it will just set thes values 'empty' for the user to fill.
  */
  private initForm() {
    let _id = '';
    let name = '';
    let artist = '';
    let album = '';
    let lyrics = '';
    let url = '';

    if (this.editMode) {
      const cancion = this.cancionService.getCancion(this.id);
      _id = cancion.id_song;
      name = cancion.name;
      artist = cancion.artist;
      album = cancion.album;
      url = cancion.url;
      lyrics = cancion.lyrics;
    }

    this.cancionForm = new FormGroup({
      _id: new FormControl(_id, Validators.required),
      name: new FormControl(name, Validators.required),
      artist: new FormControl(artist, Validators.required),
      album: new FormControl(album, Validators.required),
      url: new FormControl(url, Validators.required),
      lyrics: new FormControl(lyrics, Validators.required),
      
    });
  }
}
