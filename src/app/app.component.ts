import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common'; //for ngFor and stuff
import { FormsModule } from '@angular/forms'; // for ngModel
import { WishListComponent } from "./wish-list/wish-list.component";
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

// an array of arrow functions
const filters = [
  (item : wishItem) => item,
  (item : wishItem) => !item.isComplete,
  (item : wishItem) => item.isComplete
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, WishListComponent, AddWishFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  items: wishItem[] = [
    new wishItem('To learn Angular'),
    new wishItem('Get coffee', true),
    new wishItem('To find grass that cuts itself', false)
  ];



  listFilter: any = '0';

  get visibleItems(): wishItem[]{
    // we pick the correct arrow function for the filter from the filters array(line 8)
    return this.items.filter(filters[this.listFilter]);
  };

  title = 'wishlist';

 

  

}
