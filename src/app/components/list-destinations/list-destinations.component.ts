import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHostelComponent } from '../card-hostel/card-hostel';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-list-destinations',
  standalone: true,
  imports: [CardHostelComponent, CommonModule],
  templateUrl: './list-destinations.component.html',
  styleUrls: ['./list-destinations.component.css']
})
export class ListDestinationsComponent implements OnInit {
  listdestinations: any[] = []; // Consider creating a proper interface

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.loadDestinations();
  }

  loadDestinations(): void {
    this.destinationService.getDestination().subscribe({
      next: (destinations) => {
        this.listdestinations = destinations;
      },
      error: (err) => {
        console.error('Error loading destinations:', err);
      }
    });
  }
}