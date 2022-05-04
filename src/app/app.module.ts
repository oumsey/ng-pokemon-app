import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

@NgModule({
  declarations: [//All elements (component, directive,...) we need in this module except module
    AppComponent, BorderCardDirective, PokemonTypeColorPipe, ListPokemonComponent, DetailPokemonComponent
  ],
  imports: [// all module we need in this module
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],//for injection of dependance of angular
  bootstrap: [AppComponent]//include root comonent
})
export class AppModule { }
