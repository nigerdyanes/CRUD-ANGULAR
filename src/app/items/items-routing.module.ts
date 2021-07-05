import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';

const routes: Routes = [
  {
    path:'create',
    component: CreateItemComponent,
  },
  {
    path:'list',
    component: ListItemComponent
  },
  {
    path:'edit/:id',
    component: EditItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
