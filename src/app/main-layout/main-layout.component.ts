import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  standalone: false
})
export class MainLayoutComponent {
  protected readonly parentName = signal('Mr Sodasi Lamula');

  constructor(private router: Router) {}

  logout() {
    console.log('Logout clicked');
    // In a real application, you would clear the user session/token here.
    this.router.navigate(['/login']);
  }
}
