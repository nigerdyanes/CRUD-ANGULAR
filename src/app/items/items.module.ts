import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ItemsRoutingModule } from './items-routing.module';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';

@NgModule({
  declarations: [
    CreateItemComponent,
    ListItemComponent,
    EditItemComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ItemsModule { }
