import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  items: wishItem[] = [
    new wishItem('To learn Angular'),
    new wishItem('Get coffee', true),
    new wishItem('To find grass that cuts itself', false)
  ];

  newWishText = '';

  listFilter: String = '0';

  title = 'wishlist';

  addNewWish(){
    this.items.push(new wishItem(this.newWishText));
    this.newWishText = '';
  }

  toggleItem(item: wishItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }

  getFilterItems(){
    let filterItems: wishItem[] = [];
    for(let item of this.items){
      if(this.listFilter == '0'){
        filterItems.push(item);
      }
      if(this.listFilter == '1' && !item.isComplete){
        filterItems.push(item);
      }
      if(this.listFilter == '2' && item.isComplete){
        filterItems.push(item);
      }
    }
    return filterItems;
  }
}
