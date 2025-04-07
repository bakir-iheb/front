import { Component, inject , OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TripService } from '../../services/trip.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-destination-details',
  imports: [DatePipe,FormsModule,RouterLink],
  templateUrl: './destination-details.component.html',
  styleUrl: './destination-details.component.css'
})
export class DestinationDetailsComponent {
  destinationId: string;
  trips: any[] = [];
  startDate: string = '';
  endDate: string = '';
  error: string | null = null;

  constructor(
    private tripService: TripService,
    private route: ActivatedRoute
  ) {
    this.destinationId = this.route.snapshot.paramMap.get('id') || '';
  }

  checkAvailability() {
    if (!this.startDate || !this.endDate) {
      this.error = 'Please select both start and end dates';
      return;
    }

    this.error = null;
    this.tripService.getAvailableTrips(this.destinationId, this.startDate, this.endDate)
      .subscribe({
        next: (trips) => {
          this.trips = trips;
        },
        error: (err) => {
          this.error = err.message || 'An error occurred while fetching trips';
        }
      });
  }

  getImageUrl(imagePath: string): string {
    return `http://localhost:3000/${imagePath}`; 
  }

}
