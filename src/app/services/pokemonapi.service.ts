import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonapiService {

  constructor(private http: HttpClient) { }

  getPokemons() {
    // let configUrl = 'https://pokeapi.co/api/v2/pokemon/201/'
    let configUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
    return this.http.get(configUrl);
  }
  getPokemonsByUrl(url: any) {
    let confId = url
    return this.http.get(confId);
  }
  getPokemonPage(id:any) {
    let configUrl = 'https://pokeapi.co/api/v2/pokemon/' + id + '/'
    return this.http.get(configUrl);
    console.log(id)
  }
}
