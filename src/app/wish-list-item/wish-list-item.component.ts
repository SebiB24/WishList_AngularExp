import { Component, OnInit, Input, Output, EventEmitter, input} from '@angular/core';
import { wishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  imports: [],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent implements OnInit{
  @Input() wishText! : String; // "!" specifies it can't be null
  
  @Input() fullfilled! : boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    
  }

  toggleFullfilled(){
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
