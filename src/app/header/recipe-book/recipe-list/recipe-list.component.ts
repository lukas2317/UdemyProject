import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static.chefkoch-cdn.de/ck.de/rezepte/50/50802/745398-960x720-sauerbraten-a-la-surina.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static.chefkoch-cdn.de/ck.de/rezepte/50/50802/745398-960x720-sauerbraten-a-la-surina.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
