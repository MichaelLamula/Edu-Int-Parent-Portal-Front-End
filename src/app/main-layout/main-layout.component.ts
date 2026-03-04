import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  standalone: false
})
export class MainLayoutComponent {
  protected readonly parentName = signal('John Doe');

  logout() {
    console.log('Logout clicked');
    // Implement logout logic here
  }
}
