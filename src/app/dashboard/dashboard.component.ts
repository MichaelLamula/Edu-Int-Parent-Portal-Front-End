import { Component, signal, computed } from '@angular/core';

interface Student {
  id: number;
  name: string;
  careers: { name: string; targetAPS: number }[];
  progress: { subject: string; pledgeTarget: number; currentMark: number; apsDiff: number }[];
  attendance: { weekly: number; extra: number };
  comments: { subject: string; text: string }[];
}

interface NavTile {
  title: string;
  description: string;
  imageUrl: string;
  route: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false
})
export class DashboardComponent {
  navTiles: NavTile[] = [
    {
      title: 'Performance',
      description: 'Student excellence and academic rigor.',
      imageUrl: 'assets/images/performance.png',
      route: 'performance'
    },
    {
      title: 'Pledges',
      description: 'Student collective commitment.',
      imageUrl: 'assets/images/pledge.png',
      route: 'pledges'
    },
    {
      title: 'Teacher Notes',
      description: 'Teacher administrative and mentorship support.',
      imageUrl: 'assets/images/teachernotes.png',
      route: 'teacher-notes'
    }
  ];
}
