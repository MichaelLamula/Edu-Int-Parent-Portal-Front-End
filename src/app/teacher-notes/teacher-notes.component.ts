import { Component, signal } from '@angular/core';

interface TeacherNote {
  id: number;
  date: string;
  teacherName: string;
  message: string;
  subject: string;
}

@Component({
  selector: 'app-teacher-notes',
  templateUrl: './teacher-notes.component.html',
  styleUrls: ['./teacher-notes.component.css'],
  standalone: false
})
export class TeacherNotesComponent {
  notes = signal<TeacherNote[]>([
    {
      id: 1,
      date: '2023-10-25',
      teacherName: 'Mr. Smith',
      subject: 'Mathematics',
      message: 'Alice has shown great improvement in algebra. She needs to focus more on geometry proofs for the upcoming exam.'
    },
    {
      id: 2,
      date: '2023-10-20',
      teacherName: 'Ms. Johnson',
      subject: 'Physics',
      message: 'Excellent performance in the recent lab experiment. Keep up the good work!'
    },
    {
      id: 3,
      date: '2023-10-15',
      teacherName: 'Mrs. Davis',
      subject: 'English',
      message: 'Please ensure that the essay assignment is submitted by next Monday. The draft showed promise but needs more supporting arguments.'
    }
  ]);

  selectedNote = signal<TeacherNote | null>(null);
  isModalOpen = signal<boolean>(false);

  openMessage(note: TeacherNote) {
    this.selectedNote.set(note);
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.selectedNote.set(null);
  }
}
