import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ItemsService } from "../../../core/services/items.service"
import { Item } from '../../../core/models/item.model';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private itemsService:ItemsService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveItem(event:Event){
    event.preventDefault();
    const item:Item = this.form.value;
    this.itemsService.createItem(item)
    console.log(item);
  }

  buildForm(){
    this.form = this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(5)]],
      department:['',[Validators.required, Validators.minLength(5)]],
      responsable:['',[Validators.required, Validators.minLength(5)]],
      years:['',[Validators.required, Validators.minLength(5)]],
      zone:['',[Validators.required, Validators.minLength(5)]],
    });
  }

}
