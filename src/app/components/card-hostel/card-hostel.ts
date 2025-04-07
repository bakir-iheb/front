import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-hostel',
  imports: [NgClass , RouterLink],
  templateUrl: './card-hostel.component.html',
  styleUrl: './card-hostel.component.css'
})
export class CardHostelComponent {
  @Input() hostel:any

    getImageUrl(image: string): string {
      if (!image) return '';      
      return image.startsWith('http') ? image : `http://localhost:3000${image}`;
    }

} 
