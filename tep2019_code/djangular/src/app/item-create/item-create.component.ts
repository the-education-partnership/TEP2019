import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { Item } from '../models';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent {
  @Output() itemChange = new EventEmitter<Item>();

  constructor(private apiService: ApiService) { }
  new_item = new Item(null, '', '', null, null, true, 0);

  public onSubmit() {
    this.createItem();
  }

  public createItem() {
    // TODO: validation
    this.apiService.create("items", this.new_item).subscribe((response: Item) => {
      this.itemChange.emit(response);
      this.new_item = new Item(null, '', '', null, null, true, 0);
    });
  }
}