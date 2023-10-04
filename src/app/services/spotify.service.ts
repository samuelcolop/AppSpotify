import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service Listo')
   }

   getQuery(query: string){
    
    const url= `https://api.spotify.com/v1/${ query }`;
    
    const headers = new HttpHeaders({

      'Authorization': 'Bearer BQDq-HlWC8UYQwUzJeoFu2APLLQCA082eYoU9Yz2xeeU-1Fzxsx-u6uWnadCev3kl7d9UX4exUm46RTerrmvDyokUsE8M1U4iSBVLsbaUdDSR2abeI8'
    });
    return this.http.get(url,{headers});
   }

   getNewReleases(){

     return this.getQuery('browse/new-releases?limit=20')
     .pipe( map ( (data:any) => data.albums.items));
   } 
   
   getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&market=ES&limit=15`)
    .pipe( map ( (data:any) => data.artists.items));
   }

   getArtista(id:string){
    return this.getQuery(`artists/${ id }`);
   }

   getTopTracks(id:string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe(map((data:any)=>data.tracks));
   }

}
