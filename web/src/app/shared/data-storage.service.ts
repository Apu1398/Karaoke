import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cancion } from "../models/cancion.model";
import { User } from "../models/user.model";
import { CancionService } from "../services/cancion.service";
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    constructor(private http: HttpClient,
                private cancionService: CancionService) {

    }

    /**
 * ------------------------------------------------
  * http requests de registro y login
  * ------------------------------------------------
  */

    /**
  * @name sendRegisterInfo()
  * @description  It sends an http get request to the backend wiht the info of the user's's registration.
  */
   sendRegisterInfo(user: User) {
    const body = { username: user.username, email: user.email, password: user.password, roles: user.roles};
    this.http
    .post(
      'http://localhost:8080/api/auth/signup',
      body, this.httpOptions
    )
    .subscribe(response => {
      console.log(response);
    });      
  }

  /**
  * @name sendLoginInfo()
  * @argument {string} username
  * @argument {string} password
  * @description  It sends an http get request to the backend wiht the info of the client's email and password. 
  * @returns 
  */
   sendLoginInfo(username: string, password: string): Observable<User>{
    const body = { username: username, password: password };
    return this.http
    .post<User>(
      'http://localhost:8080/api/auth/signup',
      body, this.httpOptions
    )     
  }

    /**
 * ------------------------------------------------
  * http requests de canciones
  * ------------------------------------------------
  */

    /**
  * @name updateCancion()
  * @description Updates song
  */
  updateCancion(cancion: Cancion) {
    this.http
      .put(
        'http://localhost:8080/api/update_song/' + cancion.id_song,
        cancion
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchCanciones();
  }

  /**
  * @name deleteCancion()
  * @argument {Cancion} cancion
  * @description Deletes a song 
  */
  deleteSong(song_id: string) {
    this.http.delete<Cancion>('http://localhost:8080/api/delete_song/614a6a3bf05dc4b30f9ffb24' + song_id, this.httpOptions).subscribe();
    this.fetchCanciones();
  }

  /**
  * @name storeSong()
  * @argument {Cancion} cancion
  * @description It sends an http post request with a song as argument to store the respective songs 
  * in the database.
  */
  storeSong(cancion: Cancion) {
    this.http
      .post(
        'http://localhost:8080/api/add_song',
        cancion, this.httpOptions
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchCanciones();

  }

  /**
  * @name fetchCanciones()
  * @returns An observable array of songs  
  */
  fetchCanciones() {
    return this.http
      .get<Cancion[]>(
        'http://localhost:8080/api/get_songs'
      )
      .pipe(
        map(canciones => {
          return canciones.map(cancion => {
            return {
              ...cancion
            };
          });
        }),
        tap(canciones => {
          this.cancionService.setCanciones(canciones);
        })
      )
  }

    //Streaming
}