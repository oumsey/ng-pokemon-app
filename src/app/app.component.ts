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
  pokemonSelected:Pokemon|undefined;

  ngOnInit(): void {
      console.table(this.pokemonList);
      // this.selectPokemenOld(this.pokemonList[0]);
  }

  selectPokemon(pokemonId:String){
    const pokemon: Pokemon|undefined =this.pokemonList.find(pokemon=>pokemon.id==+pokemonId);
    if(pokemon){
      // alert(`Vous avez demandé le pokemon ${pokemon.name}`);
      this.pokemonSelected=pokemon;
    }else{
      console.log(`Vous avez demandé un pokemon inexistant`);
      // alert(`Vous avez demandé un pokemon inexistant ${+pokemonId}`);
      //this.pokemonSelected=pokemon;
    }
    
  }
  selectPokemonOld2(pokemonId:String){
    const id:number = +pokemonId;
   this.pokemonSelected=this.pokemonList[id];// on affiche le pokemon qui cet index dans le tableau
   console.log(`Vous avez cliqué sur le pokemon ${this.pokemonList[id].name}`);

   const pokemon: Pokemon|undefined =this.pokemonList.find(pokemon=>pokemon.id==+pokemonId);
   if(pokemon){
     alert(`Vous avez demandé le pokemon ${pokemon.name}`);
     this.pokemonSelected=pokemon;
   }else{
     console.log(`Vous avez demandé un pokemon inexistant`);
     alert(`Vous avez demandé un pokemon inexistant ${+pokemonId}`);
     //this.pokemonSelected=pokemon;
   }
   
 }
  selectPokemenold1(event:MouseEvent){
    const index:number = +(event.target as HTMLInputElement).value;
    console.log(`Vous avez cliqué sur le pokemon ${this.pokemonList[index].name}`);
    alert(`Vous avez cliqué sur le pokemon ${this.pokemonList[index].name}`);
  }
  selectPokemenOld(pokemon:Pokemon){
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
  }
}
