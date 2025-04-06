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
}
