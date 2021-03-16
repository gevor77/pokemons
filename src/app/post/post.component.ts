import { Component, OnInit } from '@angular/core';
import { PokemonapiService } from '../services/pokemonapi.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id: any
  pokemonsData: any
  pokemonsDataName: any
  pokemonsDataSprites:any
  pokemonsDataState: any
  pokemonsDataType: any
  constructor(public pokemonapiService: PokemonapiService,
    private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.params
      this.pokemonapiService.getPokemonPage(this.id._value.id).subscribe((dataPokemons: any) => {
        console.log(dataPokemons)
        this.pokemonsData = dataPokemons
        this.pokemonsDataSprites = dataPokemons.sprites
        this.pokemonsDataName = dataPokemons.name
        this.pokemonsDataState = dataPokemons.stats
        this.pokemonsDataType = dataPokemons.types
        // this.dataPokemons = dataPokemons.moves
      })
  
  }

}
