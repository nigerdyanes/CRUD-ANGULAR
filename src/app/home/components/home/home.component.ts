import { Component, OnInit } from '@angular/core';

import { ItemsService } from "../../../core/services/items.service";
import { Item } from '../../../core/models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Item[] = [{
    "name": "68788-9183",
    "department": "Marketing",
    "responsable": "Associate Professor",
    "years": 1,
    "zone": "Structural Analysis Engineer"
  }, {
    "name": "36987-3435",
    "department": "Training",
    "responsable": "Business Systems Development Analyst",
    "years": 2,
    "zone": "Cost Accountant"
  }, {
    "name": "54738-951",
    "department": "Marketing",
    "responsable": "Financial Analyst",
    "years": 3,
    "zone": "Data Coordiator"
  }, {
    "name": "33992-7993",
    "department": "Legal",
    "responsable": "Associate Professor",
    "years": 4,
    "zone": "Financial Analyst"
  }, {
    "name": "54868-5248",
    "department": "Business Development",
    "responsable": "Environmental Tech",
    "years": 5,
    "zone": "Mechanical Systems Engineer"
  }, {
    "name": "51811-376",
    "department": "Human Resources",
    "responsable": "Research Nurse",
    "years": 6,
    "zone": "Junior Executive"
  }, {
    "name": "21695-791",
    "department": "Product Management",
    "responsable": "Media Manager III",
    "years": 7,
    "zone": "Account Coordinator"
  }, {
    "name": "67046-222",
    "department": "Research and Development",
    "responsable": "Account Coordinator",
    "years": 8,
    "zone": "Recruiter"
  }, {
    "name": "61296-001",
    "department": "Services",
    "responsable": "Programmer I",
    "years": 9,
    "zone": "Community Outreach Specialist"
  }, {
    "name": "15127-978",
    "department": "Business Development",
    "responsable": "Civil Engineer",
    "years": 10,
    "zone": "Clinical Specialist"
  }];
  pageSize = 25;
  page = 1;

  constructor(
    private itemsService:ItemsService
  ) { }

  ngOnInit(): void {
    // this.items = this.itemsService.getAll();
    console.log(this.items);
  }



}
