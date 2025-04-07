import { NgClass } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-card-hostel',
  imports: [NgClass , RouterLink],
  templateUrl: './card-hostel.component.html',
  styleUrl: './card-hostel.component.css'
})
export class CardHostelComponent {
  @Input() destination :any
  @Output() deleted = new EventEmitter<string>();
  @Output() edited = new EventEmitter<string>();

  private readonly destinationService: DestinationService = inject(DestinationService)

    getImageUrl(image: string): string {
      if (!image) return '';      
      return image.startsWith('http') ? image : `http://localhost:3000${image}`;
    }

    onEdit() {
      this.edited.emit(this.destination._id);
    }

    onDelete() {
      if (confirm('Tu es sûre de vouloir supprimer cette destination ?')) {
        this.destinationService.deleteDestination(this.destination._id).subscribe({
          next: () => {
            this.deleted.emit(this.destination._id); 
          },
          error: (err) => {
            console.error('Erreur lors de la suppression :', err);
          }
        });
      }
    }
} 
