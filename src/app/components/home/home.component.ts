import { AfterViewInit, Component, inject, OnInit  } from '@angular/core';
import { CardHostelComponent } from "../card-hostel/card-hostel";
import { Router, RouterLink } from '@angular/router';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-home', 
  imports: [CardHostelComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  destinations: any[] = [];
  private router: Router =  inject(Router);

  private readonly destinationService= inject(DestinationService)

  ngOnInit(): void {
    this.loadDestinations();
  }

  loadDestinations(): void {
    this.destinationService.getDestination().subscribe({
      next: (data) => {
        this.destinations = data;
      },
      error: (err) => {
        console.error("Erreur de chargement des destinations :", err);
      }
    });
  }

  removeFromList(id: string) {
    this.destinations = this.destinations.filter(d => d._id !== id);
  }
  
  trackById(index: number, item: any): string {
    return item._id;
  }

  onEditDestination(id: string) {
    this.router.navigate(['/edit-destination', id]); 
   
  }

}
