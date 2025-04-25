import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  items: wishItem[] = [
    new wishItem('To learn Angular'),
    new wishItem('Get coffee', true),
    new wishItem('To find grass that cuts itself', false)
  ];
  title = 'wishlist';

  toggleItem(item: wishItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
