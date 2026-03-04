import { Component, signal, computed } from '@angular/core';

interface Student {
  id: number;
  name: string;
  careers: { name: string; targetAPS: number }[];
  progress: { subject: string; pledgeTarget: number; currentMark: number; apsDiff: number }[];
  attendance: { weekly: number; extra: number };
  comments: { subject: string; text: string }[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false
})
export class DashboardComponent {
  protected readonly students = signal<Student[]>([
    {
      id: 1,
      name: 'Alice Doe',
      careers: [
        { name: 'Software Engineering', targetAPS: 32 },
        { name: 'Accounting', targetAPS: 30 }
      ],
      progress: [
        { subject: 'Mathematics', pledgeTarget: 80, currentMark: 75, apsDiff: -1 },
        { subject: 'Physics', pledgeTarget: 75, currentMark: 78, apsDiff: 1 }
      ],
      attendance: { weekly: 98, extra: 100 },
      comments: [
        { subject: 'Math', text: 'Great participation, needs work on geometry.' }
      ]
    },
    {
      id: 2,
      name: 'Bob Doe',
      careers: [
        { name: 'Medicine', targetAPS: 40 },
        { name: 'Biology', targetAPS: 35 }
      ],
      progress: [
        { subject: 'Life Sciences', pledgeTarget: 85, currentMark: 82, apsDiff: -1 },
        { subject: 'Physical Sciences', pledgeTarget: 80, currentMark: 85, apsDiff: 1 }
      ],
      attendance: { weekly: 95, extra: 90 },
      comments: [
        { subject: 'Life Sciences', text: 'Excellent understanding of concepts.' }
      ]
    }
  ]);

  protected readonly selectedStudentId = signal<number>(1);

  protected readonly currentStudent = computed(() => {
    return this.students().find(s => s.id === this.selectedStudentId()) || this.students()[0];
  });

  selectStudent(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedStudentId.set(Number(selectElement.value));
  }
}
