import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit
{
  nbr1:number=0;
  nbr2:number=0;
  prod:number=0;

calculProduit()
{
  this.prod=this.nbr1*this.nbr2;
}
  constructor() { }

  ngOnInit() {
  }

}
