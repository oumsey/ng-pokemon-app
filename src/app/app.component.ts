import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
@Component({
  selector: 'app-root',//name of component we will use for call in other component
  templateUrl:'app.component.html'
})
export class AppComponent implements OnInit {
  title = 'ng-pokemon-app';
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(): void {
      console.table(this.pokemonList);
      // this.selectPokemenOld(this.pokemonList[0]);
  }

  selectPokemen(event:MouseEvent){
    const index:number = +(event.target as HTMLInputElement).value;
    console.log(`Vous avez cliqué sur le pokemon ${this.pokemonList[index].name}`);
  }

  selectPokemenOld(pokemon:Pokemon){
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
  }
}
