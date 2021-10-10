import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cancion } from '../models/cancion.model';
import { CancionService } from '../services/cancion.service';

@Component({
  selector: 'app-karaoke',
  templateUrl: './karaoke.component.html',
  styleUrls: ['./karaoke.component.css']
})
export class KaraokeComponent implements OnInit {

  canciones: Cancion[];
  subscription: Subscription;
  songName: any;
  songArtist: any;
  songAlbum: any;
  songLyric: any;
  songID: any;
  audio = new Audio();

  constructor(private cancionService: CancionService,) { }

  ngOnInit(): void {
    this.subscription = this.cancionService.cancionesChanged
      .subscribe(
        (canciones: Cancion[]) => {
          this.canciones = canciones;
        }
      );
    this.canciones = this.cancionService.getCanciones();
  }

  searchSongName() {
    if (this.songName == "" ) {
      this.ngOnInit();
    } else {
      this.canciones = this.canciones.filter(res => {
        return res.name.toLocaleLowerCase().match(this.songName.toLocaleLowerCase())
      })
    }
  }
  searchSongArtist() {
    if (this.songArtist == "" ) {
      this.ngOnInit();
    } else {
      this.canciones = this.canciones.filter(res => {
        return res.artist.toLocaleLowerCase().match(this.songArtist.toLocaleLowerCase())
      })
    }
  }
  searchSongAlbum() {
    if (this.songAlbum == "" ) {
      this.ngOnInit();
    } else {
      this.canciones = this.canciones.filter(res => {
        return res.album.toLocaleLowerCase().match(this.songAlbum.toLocaleLowerCase())
      })
    }
  }
  searchSongLyrics() {
    if (this.songLyric == "" ) {
      this.ngOnInit();
    } else {
      this.canciones = this.canciones.filter(res => {
        return res.lyrics.toLocaleLowerCase().match(this.songLyric.toLocaleLowerCase())
      })
    }
  }

  playMusic() {
    this.audio.src = "../assets/song.mp3";
    this.audio.load();
    this.audio.play();
  }
  stopMusic() {
    this.audio.pause();
  }
  getLyrics() {
    
  }

}
