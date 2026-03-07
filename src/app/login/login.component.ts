import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username && this.password) {
      // In a real app, you would validate credentials against a backend service here.
      // For this demo, we'll just navigate to the dashboard.
      console.log('Login successful');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Please enter both username and password.';
    }
  }
}
