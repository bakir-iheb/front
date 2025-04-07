import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  
  user!: User | null;
  private readonly userService = inject(UsersService)

  constructor() {}

  ngOnInit(): void {
    console.log('getCurrentUser direct:', this.userService.getCurrentUser());

    this.userService.currentUser$.subscribe((res) => {
      console.log('currentUser$ changed:', res);
      this.user = res;
    });
  }
}
