import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { ItemsRoutingModule } from './items-routing.module';
import { CreateItemComponent } from './components/create-item/create-item.component';

@NgModule({
  declarations: [
    CreateItemComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ItemsModule { }
