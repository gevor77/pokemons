import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { PokemonapiService } from '../services/pokemonapi.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
export interface UserData {
  name: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<UserData>();
  options: any = FormGroup;
  @ViewChild(MatPaginator) paginator:any = MatPaginator;

  name = new FormControl()
  constructor(
    public pokemonapiService: PokemonapiService,
    fb: FormBuilder,
    public router: Router,
  ) {
    this.options = fb.group({
      name: this.name,
    });
  }
  result: any;
  dataPokemons: any
  dataPokemonsId: any
  ngOnInit(): void {
    this.pokemonapiService.getPokemons().subscribe((data: any) => {
      this.result = data.results
      this.dataSource = data.results
      this.dataSource = new MatTableDataSource(data.results)
      this.dataSource.paginator = this.paginator;
    }) 
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  changeHref(id: any) { 
    setTimeout(()=> {
      for (let res of this.result) {
        if (res.name == id.value) {
          console.log(res)
          this.pokemonapiService.getPokemonsByUrl(res.url).subscribe((dataPokemons: any) => {
            console.log(dataPokemons)
            this.dataPokemons = dataPokemons.moves
          })
        }
      }
    },4000)
  }

}
