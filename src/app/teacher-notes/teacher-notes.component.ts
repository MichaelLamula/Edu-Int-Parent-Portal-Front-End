import { Component, signal } from '@angular/core';

interface TeacherNote {
  id: number;
  date: string;
  teacherName: string;
  message: string;
  subject: string;
}

interface AIRecommendation {
  noteId: number;
  analysis: string;
  recommendedActions: string[];
  youtubeLinks: { title: string; url: string }[];
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

  // Mock AI Recommendations based on the notes
  recommendations = signal<AIRecommendation[]>([
    {
      noteId: 1,
      analysis: 'The student is strong in Algebra but struggling with Geometry proofs.',
      recommendedActions: [
        'Practice 5 geometry proofs daily.',
        'Review theorems related to triangles and circles.',
        'Attend extra math classes on Thursdays.'
      ],
      youtubeLinks: [
        { title: 'Introduction to Geometry Proofs', url: 'https://www.youtube.com/watch?v=example1' },
        { title: 'Triangle Congruence Theorems', url: 'https://www.youtube.com/watch?v=example2' }
      ]
    },
    {
      noteId: 2,
      analysis: 'The student is performing well in practical applications of Physics.',
      recommendedActions: [
        'Maintain current study habits.',
        'Help peers with lab setups to reinforce learning.',
        'Explore advanced physics concepts for extra credit.'
      ],
      youtubeLinks: []
    },
    {
      noteId: 3,
      analysis: 'The student needs to improve argumentative writing skills.',
      recommendedActions: [
        'Read opinion pieces in newspapers to understand structure.',
        'Practice writing thesis statements.',
        'Use the PEEL method (Point, Evidence, Explanation, Link) for paragraphs.'
      ],
      youtubeLinks: [
        { title: 'How to Write an Argumentative Essay', url: 'https://www.youtube.com/watch?v=example3' },
        { title: 'Structuring Your Essay', url: 'https://www.youtube.com/watch?v=example4' }
      ]
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

  getRecommendation(noteId: number): AIRecommendation | undefined {
    return this.recommendations().find(r => r.noteId === noteId);
  }
}
