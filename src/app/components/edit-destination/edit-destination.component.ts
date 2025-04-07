import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationService } from '../../services/destination.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-destination',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-destination.component.html',
  styleUrls: ['./edit-destination.component.css']
})
export class EditDestinationComponent implements OnInit {
  destinationForm: FormGroup;
  destinationId: string = '';
  selectedImage: File | null = null;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private destinationService: DestinationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.destinationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      country: ['', [Validators.required]],
      description: [''],
      rating: [0, [Validators.min(1), Validators.max(5)]],
      price_range: [''],
      image: [null]
    });
  }

  ngOnInit(): void {
    this.destinationId = this.route.snapshot.params['id'];
    this.loadDestination();
  }

  loadDestination(): void {
    this.isLoading = true;
    this.destinationService.getDestinationById(this.destinationId).subscribe({
      next: (destination) => {
        this.destinationForm.patchValue({
          name: destination.name,
          country: destination.country,
          description: destination.description,
          rating: destination.rating,
          price_range: destination.price_range
        });
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading destination:', err);
        this.errorMessage = 'Failed to load destination';
        this.isLoading = false;
      }
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedImage = input.files[0];
      this.destinationForm.patchValue({ image: this.selectedImage });
      this.destinationForm.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.destinationForm.invalid) {
      this.errorMessage = 'Please fill all required fields';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const formData = new FormData();
    formData.append('name', this.destinationForm.value.name);
    formData.append('country', this.destinationForm.value.country);
    formData.append('description', this.destinationForm.value.description || '');
    formData.append('rating', this.destinationForm.value.rating);
    formData.append('price_range', this.destinationForm.value.price_range || '');

    if (this.selectedImage) {
      formData.append('image', this.selectedImage);
    }

    this.destinationService.updateDestination(this.destinationId, formData).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/destinations']);
      },
      error: (err) => {
        console.error('Error updating destination:', err);
        this.errorMessage = err.error?.message || 'Failed to update destination';
        this.isLoading = false;
      }
    });
  }
}