export class Cancion {
  public _id!: string;
  public name!: string;
  public artist!: string;
  public album!: string;
  public url!: string;
  public lyrics!: string;
  public checked: boolean;

  constructor(_id: string, name: string, artist: string, album: string, url: string, lyric: string ) {
    this.name = name
    this._id = _id
    this.artist = artist
    this.album = album
    this.lyrics = lyric
    this.url = url
  }
}
