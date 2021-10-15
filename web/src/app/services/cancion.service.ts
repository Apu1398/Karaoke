import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cancion } from '../models/cancion.model';

@Injectable()
export class CancionService {
  cancionesChanged = new Subject<Cancion[]>();
  private canciones: Cancion[] = [
    new Cancion(
      "ID",
      'La Gasolina',
      'Daddy Yankee',
      'Reggaeton Classics',
      "url",
      "Oh Oh Oh Oh Oh Who's this? (oh) Da-ddy Yan-kee! (oh, oh) Zúmbale mambo pa que mis gatas prendan los motores Zúmbale mambo pa que mis gatas prendan los motores Zúmbale mambo pa que mis gatas prendan los motores Que se preparen que lo que viene es pa que le den (¡duro!) Mamita, yo sé que tú no te me vas a quitar (¡duro!) Lo que me gusta es que tú te dejas llevar (¡duro!) Todos los weekenes ella sale a vacilar (¡duro!) Mi gata no para de janguear porque A ella le gusta la gasolina (Dame más gasolina) Cómo le encanta la gasolina (Dame más gasolina) A ella le gusta la gasolina (Dame más gasolina) Cómo le encanta la gasolina (Dame más gasolina) Ella prende las turbinas No discrimina No se pierde ni un party de marquesina Se acicala hasta pa la esquina Luce tan bien que hasta la sombra le combina Asesina, me domina Janguea en carro, motoras y limosinas Llena su tanque de adrenalina Cuando escucha el reggaeton en la cocina A ella le gusta la gasolina (Dame más gasolina) Cómo le encanta la gasolina (Dame más gasolina) A ella le gusta la gasolina (Dame más gasolina) Cómo le encanta la gasolina (Dame más gasolina) yo Aquí nosotros somos los mejores No te me ajores En la pista nos llaman los matadores Tú haces que cualquiera se enamore Cuando bailas al ritmo de los tambores Esto va pa las gatas de todos colores Pa las mayores, pa las menores Pa las que son más zorras que los cazadores Pa las mujeres que no apagan sus motores Tenemos tú y yo algo pendiente Tú me debes algo y lo sabes Conmigo ella se pierde No le rinde cuentas a nadie Tenemos tú y yo algo pendiente Tú me debes algo y lo sabes Conmigo ella se pierde No le rinde cuentas a nadie Zúmbale mambo pa que mis gatas prendan los motores Zúmbale mambo pa que mis gatas prendan los motores Zúmbale mambo pa que mis gatas prendan los motores Que se preparen que lo que viene es pa que le den (¡duro!) Mamita, yo sé que tú no te me vas a quitar (¡duro!) Lo que me gusta es que tú te dejas llevar (¡duro!) Todos los weekenes ella sale a vacilar (¡duro!) Mi gata no para de janguear porque A ella le gusta la gasolina (oh, oh) (Dame más gasolina) (oh, oh) Cómo le encanta la gasolina (oh, oh) (Dame más gasolina) (oh, oh) A ella le gusta la gasolina (oh, oh) (Dame más gasolina) (oh, oh) Cómo le encanta la gasolina (oh, oh) (Dame más gasolina) (oh, oh) Oh, oh Oh, oh Oh, oh Oh, oh"
    ),
  ];
  cancion: Cancion;

  constructor() {}

  /**
   * @name setCancion()
   * @argument {Cancion} cancion
   * @description  It sets the value of this service song with the song from the argument.
   */
  setCancion(cancion: Cancion) {
    this.cancion = cancion;
  }

  /**
  * @name setCanciones()
  * @argument {Cancion[]} devices
  * @description  It set this service songs with the value of the songs argument.
  */
   setCanciones(canciones: Cancion[]) {
    this.canciones = canciones;
    this.cancionesChanged.next(this.canciones.slice());
  }


  /**
   * @name addCancion()
   * @argument {Cancion} cancion
   * @description  Adds a song to this service array of songs
   */
  addCancion(cancion: Cancion) {
    this.canciones.push(cancion);
    this.cancionesChanged.next(this.canciones.slice());
  }

  /**
   * @name updateCancion()
   * @argument {number} index
   * @argument {Cancion} newSong
   * @description  It updates the value of a song of this service songs array.
   */
  updateCancion(index: number, newCancion: Cancion) {
    this.canciones[index] = newCancion;
    this.cancionesChanged.next(this.canciones.slice());
  }

  /**
   * @name getCanciones
   * @returns The array of songs of this service.
   */
  getCanciones() {
    return this.canciones.slice();
  }

  /**
   * @name getCancion
   * @description It searches a song by its index
   * @returns {Cancion} A cancion
   */
  getCancion(index: number) {
    return this.canciones[index];
  }

  getCancionX() {
    return this.cancion;
  }


  getCancionByID(songID : string) {
      this.canciones.forEach(cancion => {
        if (cancion._id === songID){
           this.cancion = cancion;
        } 
      });
  }

  /**
   * @name deleteCancion()
   * @argument {number} index
   * @description deletes a song by its index from this service songs array.
   */
  deleteCancion(index: number) {
    this.canciones.splice(index, 1);
    this.cancionesChanged.next(this.canciones.slice());
  }
}
