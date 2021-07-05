import { Component, OnInit } from '@angular/core';

import { ItemsService } from "../../../core/services/items.service";
import { Item } from "../../../core/models/item.model";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  items: Item[];

  constructor(
    private itemsService:ItemsService
  ) { }

  ngOnInit(): void {
    this.items = this.itemsService.getAll();
  }

}
