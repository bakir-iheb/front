import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DestinationService } from '../../services/destination.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-destination',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-destination.component.html',
  styleUrl: './add-destination.component.css'
})
export class AddDestinationComponent {
  private readonly destinationService = inject(DestinationService);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  destinationForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    country: ['', [Validators.required]],
    description: [''],
    image: [null as File | null, [Validators.required]]
  });

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.destinationForm.patchValue({
        image: file
      });
      this.destinationForm.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit() {
    if (this.destinationForm.invalid) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const formData = new FormData();
    formData.append('name', this.destinationForm.value.name!);
    formData.append('country', this.destinationForm.value.country!);
    formData.append('description', this.destinationForm.value.description || '');
    
    const image = this.destinationForm.value.image;
    if (image) {
      formData.append('image', image);
    }
    
    this.destinationService.createDestination(formData).subscribe({
      next: () => {
        alert('Destination ajoutée avec succès');
        this.router.navigate(['/destination']);
      },
      error: (err) => {
        console.error('Error adding destination', err);
        alert(`Erreur: ${err.error?.message || 'Échec de l\'ajout'}`);
      }
    });
  }
}