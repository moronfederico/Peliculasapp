import { Injectable } from '@angular/core';

import { Jsonp} from "@angular/common/http";

import 'rxjs/Rx'; //map

@Injectable()
export class PeliculasService {

  private apiKey: string = "d4033b8ab00c59d5c850a40a49e12dac";
  private urlMoviedb: string = "https://api.themovied.db.org/3";

  constructor( private jsonp:Jsonp ) { }

  getPopulalres(){

    
  
  let url = `${this.urlMoviedb}/discover/movie?sort_by=popularuty.desc&api_key=${ this.apikey }&language=es&callback=JSON_CALLBACK`;
  
  return this.jsonp.get( url )
    .map(res=> res.json());
  
  }
}
