import { Injectable } from '@angular/core';

import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  items: Item[] =[];

  constructor() {}

  getAll(){
    return this.items;
  }

  createItem(newItem:Item){
    return this.items.push(newItem);
  }
}
