import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
produits!:Produit[];
categories!: Categorie[];
IdCategorie!:number;
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.categories=this.produitService.listeCategories();
    this.produits=[];
  }
onchange(){
console.log(this.IdCategorie)
this.produits=this.produitService.rechercheParCategorie(this.IdCategorie);
}

supprimerProduit(p: Produit)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.produitService.supprimerProduit(p);
}
}
