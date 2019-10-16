import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { TableauComponent } from './tableau/tableau.component';
import { PersonneComponent } from './personne/personne.component';
import { CalculComponent } from './calcul/calcul.component';
import { ProduitComponent } from './produit/produit.component';
import { CandidatViewComponent } from './candidat-view/candidat-view.component';
import { Tp3Parti1Component } from './tp3-parti1/tp3-parti1.component';
import { ProfilComponent } from './profil/profil.component';
import { OrientationComponent } from './orientation/orientation.component'; 
@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TableauComponent,
    PersonneComponent,
    CalculComponent,
    ProduitComponent,
    CandidatViewComponent,
    Tp3Parti1Component,
    ProfilComponent,
    OrientationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
