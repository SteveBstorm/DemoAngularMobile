import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  shoppingList : Article[] = []

  constructor() { }

  addArticle(article : Article){
    let index = this.shoppingList.findIndex((a) => a.name === article.name)
    if(index === -1) {
      this.shoppingList.push(article);
    }
    else this.addQty(index);
  }

  addQty(index : number) {
    this.shoppingList[index].qty++
  }

  remQty(index : number) {
    this.shoppingList[index].qty--
    if(this.shoppingList[index].qty < 1) this.removeArticle(index)
  }

  removeArticle(index : number) {
    this.shoppingList.splice(index, 1)
  }
  check(index : number) {
    this.shoppingList[index].isChecked = !this.shoppingList[index].isChecked
  }
}
