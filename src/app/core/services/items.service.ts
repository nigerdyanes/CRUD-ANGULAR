import { Injectable } from '@angular/core';

import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  items: Item[] = [
    {
      name:'test',
      department:'test',
      responsable:'test',
      years:1,
      zone:'test'
    }
  ];

  constructor() {}

  getAll(){
    return this.items;
  }

  getItem(index:number){
    return this.items[index];
  }

  createItem(newItem:Item){
    return this.items.push(newItem);
  }
}
