import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  item = {
    item_id: 0,
    item_product: '',
    item_quantity: 1,
    item_priority: 3,
    item_deleted: 0,
    item_purchased: 0,
    item_modified: '',
    item_created: '',
    user_user_id: '',
  };
  submitted = false;

  constructor(private listService: ListService) {}

  ngOnInit() {}

  saveTutorial() {
    const data = {
      item_id: this.item.item_id,
      item_product: this.item.item_product,
      item_quantity: this.item.item_quantity,
      item_priority: this.item.item_priority,
      item_deleted: this.item.item_deleted,
      item_purchased: this.item.item_purchased,
      item_modified: this.item.item_modified,
      item_created: this.item.item_created,
      user_user_id: this.item.user_user_id,
    };

    console.log(data);
    this.listService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newTutorial() {
    this.submitted = false;
    this.item = {
      item_id: 0,
      item_product: '',
      item_quantity: 1,
      item_priority: 3,
      item_deleted: 0,
      item_purchased: 0,
      item_modified: '',
      item_created: '',
      user_user_id: '',
    };
  }
}
