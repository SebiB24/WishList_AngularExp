import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common'; //for ngFor and stuff
import { FormsModule } from '@angular/forms'; // for ngModel
import { WishListComponent } from "./wish-list/wish-list.component";
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from "./wish-filter/wish-filter.component";
import { ArrowFunctionExpr } from '@angular/compiler';

// an array of arrow functions


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  items: wishItem[] = [
    new wishItem('To learn Angular'),
    new wishItem('Get coffee', true),
    new wishItem('To find grass that cuts itself', false)
  ];
  
  filter: any;

}
