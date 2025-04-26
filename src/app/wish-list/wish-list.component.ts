import { Component, Input } from '@angular/core';
import { wishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  @Input() wishes : wishItem[] = [];

  toggleItem(item: wishItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
