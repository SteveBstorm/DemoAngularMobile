import { Component, OnInit } from '@angular/core';
import { Article } from './models/article.model';
import { ShoppingService } from './service/shopping.service';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  newItem : string
  articleList : Article[] = []


  constructor(
    public _shoppingService : ShoppingService
  ) { }

  ngOnInit(): void {
    this.articleList = this._shoppingService.shoppingList
  }

  addArticle() {
    this._shoppingService.addArticle({
      name : this.newItem,
      qty : 1,
      isChecked : false
    })
    
    this.newItem = null
  }

  addOne(index : number) {
    this._shoppingService.addQty(index)
  }

  removeOne(index : number) {
    this._shoppingService.remQty(index)
  }

  remove(index : number) {
    this._shoppingService.removeArticle(index)
  }

  check(index : number) {
    this._shoppingService.check(index)
  }

}
