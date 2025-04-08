import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ListDestinationsComponent } from './components/list-destinations/list-destinations.component';
import { GroupeComponent } from './components/groupe/groupe.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddDestinationComponent } from './components/add-destination/add-destination.component';
import { DestinationDetailsComponent } from './components/destination-details/destination-details.component';
import { JoinTripComponent } from './components/join-trip/join-trip.component';
import { EditDestinationComponent } from './components/edit-destination/edit-destination.component';


export const routes: Routes = [
    { path: '',   redirectTo: 'login', pathMatch: 'full' },
    {path : "login" , title : "Login" , component:LoginComponent},
    {path : "home" , title : "Home" , component:HomeComponent},
    {path : "destination" , title : "destination" , component:ListDestinationsComponent},
    {path : "add-destination" , title : "Add Destination" , component:AddDestinationComponent},
    {path : "join-destination/:destinationId" , title : "JOIN" , component:JoinTripComponent},
    {path : "destdetail/:id" , title : "destdetail" , component:DestinationDetailsComponent},
    {path : "groupe" , title : "groupe" , component:GroupeComponent},
    {path : "profile" , title : "profile" ,component:ProfileComponent },
    {path: 'edit-destination/:id',component: EditDestinationComponent}
    
];
