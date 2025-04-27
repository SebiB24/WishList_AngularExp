import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { wishItem } from '../../shared/models/wishItem';

const filters = [
  (item : wishItem) => item,
  (item : wishItem) => !item.isComplete,
  (item : wishItem) => item.isComplete
];

@Component({
  selector: 'wish-filter',
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit{
  @Output() filter = new EventEmitter<any>();
  listFilter: any = '0';

  ngOnInit(): void {
    this.filter.emit(filters[this.listFilter]);
  }

  changeFilter(value: any){
    this.filter.emit(filters[value]);
  }
}
