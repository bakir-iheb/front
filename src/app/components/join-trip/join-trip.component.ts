import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { TripService } from '../../services/trip.service'; // Add this import
import { ActivatedRoute } from '@angular/router'; // Add this import
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Add this for form handling

@Component({
  selector: 'app-join-trip',
  imports: [ReactiveFormsModule],
  templateUrl: './join-trip.component.html',
  styleUrl: './join-trip.component.css'
})
export class JoinTripComponent implements OnInit {
  private userService = inject(UsersService);
  private tripService = inject(TripService);
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);

  currentUser$ = this.userService.currentUser$;
  tripForm: FormGroup;
  destinationId: string | null = null;
  loading = false;
  error: string | null = null;

  constructor() {
    // Initialize the form
    this.tripForm = this.fb.group({
      departureDate: ['', Validators.required],
      returnDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Get destination ID from route params
    this.destinationId = this.route.snapshot.paramMap.get('destinationId');
  }

  onSubmit(): void {
    if (this.tripForm.invalid || !this.destinationId) {
      return;
    }

    // Get current user ID from the observable
    this.currentUser$.subscribe({
      next: (user) => {
        if (user?._id) {
          const tripData = {
            user: user._id,
            destination: this.destinationId,
            departureDate: this.tripForm.get('departureDate')?.value,
            returnDate: this.tripForm.get('returnDate')?.value
          };

          this.loading = true;
          this.error = null;

          // Call the trip service to create the trip
          this.tripService.createTrip(tripData).subscribe({
            next: (response) => {
              this.loading = false;
              console.log('Trip created successfully:', response);
              // Handle success (e.g., redirect or show success message)
            },
            error: (err) => {
              this.loading = false;
              this.error = err.message;
              console.error('Error creating trip:', err);
            }
          });
        }
      },
      error: (err) => {
        this.error = 'Failed to get user information';
        console.error('User fetch error:', err);
      }
    });
  }
}