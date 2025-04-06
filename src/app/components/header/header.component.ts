import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private userService = inject(UsersService);
  currentUser$ = this.userService.currentUser$;

  navLinks = [
    { path: '/home', text: 'JOININI', class: 'header-text' },
    { path: '/destination', text: 'Destinations', class: 'dest' }
  ];

  logout(): void {
    this.userService.logout();
  }
}