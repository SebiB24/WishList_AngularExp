import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
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
  @Input() filter: any;
  // angular rule for 2 way binding output has the same name as input
  //followed by Change (ex: filter and filterChange)!!! 
  @Output() filterChange = new EventEmitter<any>(); 
  listFilter: any = '0';

  ngOnInit(): void {
    this.updateFilter(this.listFilter);
  }

  updateFilter(value: any){
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
