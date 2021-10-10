export class Cancion {
  public id_song!: string;
  public name!: string;
  public artist!: string;
  public album!: string;
  public url!: string;
  public lyrics!: string;
  public checked: boolean;

  constructor(id_song: string, name: string, artist: string, album: string, url: string, lyric: string ) {
    this.name = name
    this.id_song = id_song
    this.artist = artist
    this.album = album
    this.lyrics = lyric
    this.url = url
  }
}
