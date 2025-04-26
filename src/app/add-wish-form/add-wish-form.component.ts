import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { wishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  imports: [FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<wishItem>();

  newWishText = '';
  
  addNewWish(){
    //this.items.push(new wishItem(this.newWishText));
    this.addWish.emit(new wishItem(this.newWishText)); //emit($event)
    this.newWishText = '';
  }
}
