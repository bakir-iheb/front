import { AfterViewInit, Component } from '@angular/core';
import { CardHostelComponent } from "../card-hostel/card-hostel";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home', 
  imports: [CardHostelComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  destinations:any=[
    { id : 1 ,
      image: "https://media.istockphoto.com/id/1325788917/fr/photo/une-belle-vue-sur-la-c%C3%B4te-m%C3%A9diterran%C3%A9enne-avec-de-leau-de-bouleau-une-plage-de-sable-blanc.jpg?s=612x612&w=0&k=20&c=8xz_Cjxop-ncOgJT8q8kIhsaIJWYGh2HWkxgtRZ8BwU=" ,
      name: "DJERBA",
      location: "medenin , tunisie",
      price_range: "50DT - 150DT par jour",
      rating: 5
    },
    {
      id : 2 ,
      image :"https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/2018-12/A12.jpg?itok=kwcxu1UN" ,
      name: "TOZEUR",
      location: "tozeur,tunisie",
      price_range: "10DT - 40DT par jour",
      rating: 4.2
    },
    {
      id : 3 ,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvLofJke-Lngoz6neL9aZtnnWwXIQTgsA9Q&s" ,
      name: "MEDINA",
      location: "tunis, tunisie",
      price_range: "15DT - 30DT par jour",
      rating: 4.8
    },
  ]

}
