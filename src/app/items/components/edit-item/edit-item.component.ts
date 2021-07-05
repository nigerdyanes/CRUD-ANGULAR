import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { ItemsService } from "../../../core/services/items.service";
import { Item } from '../../../core/models/item.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  item: Item;

  constructor(
    private route:ActivatedRoute,
    private itemsService:ItemsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.item = this.itemsService.getItem(params.id);
    })
  }

}
