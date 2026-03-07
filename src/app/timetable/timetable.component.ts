import { Component, signal, computed } from '@angular/core';

interface TimeSlot {
  time: string;
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
}

interface Student {
  id: number;
  name: string;
  timetable: TimeSlot[];
}

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css'],
  standalone: false
})
export class TimetableComponent {
  students = signal<Student[]>([
    {
      id: 1,
      name: 'Alice Doe',
      timetable: [
        { time: '08:00 - 09:00', monday: 'Mathematics', tuesday: 'Physics', wednesday: 'Mathematics', thursday: 'Physics', friday: 'English', saturday: 'Study Group', sunday: 'Rest' },
        { time: '09:00 - 10:00', monday: 'English', tuesday: 'History', wednesday: 'English', thursday: 'History', friday: 'Mathematics', saturday: 'Study Group', sunday: 'Rest' },
        { time: '10:00 - 11:00', monday: 'Physics', tuesday: 'Mathematics', wednesday: 'Physics', thursday: 'Mathematics', friday: 'History', saturday: 'Sports', sunday: 'Church' },
        { time: '11:00 - 12:00', monday: 'History', tuesday: 'English', wednesday: 'History', thursday: 'English', friday: 'Physics', saturday: 'Sports', sunday: 'Family Time' },
        { time: '12:00 - 13:00', monday: 'Lunch', tuesday: 'Lunch', wednesday: 'Lunch', thursday: 'Lunch', friday: 'Lunch', saturday: 'Lunch', sunday: 'Lunch' },
        { time: '13:00 - 14:00', monday: 'Geography', tuesday: 'Biology', wednesday: 'Geography', thursday: 'Biology', friday: 'Art', saturday: 'Free Time', sunday: 'Free Time' },
        { time: '14:00 - 15:00', monday: 'Biology', tuesday: 'Geography', wednesday: 'Biology', thursday: 'Geography', friday: 'PE', saturday: 'Free Time', sunday: 'Free Time' }
      ]
    },
    {
      id: 2,
      name: 'Bob Doe',
      timetable: [
        { time: '08:00 - 09:00', monday: 'Life Sciences', tuesday: 'Physical Sciences', wednesday: 'Life Sciences', thursday: 'Physical Sciences', friday: 'Accounting', saturday: 'Extra Class', sunday: 'Rest' },
        { time: '09:00 - 10:00', monday: 'Accounting', tuesday: 'Geography', wednesday: 'Accounting', thursday: 'Geography', friday: 'Life Sciences', saturday: 'Extra Class', sunday: 'Rest' },
        { time: '10:00 - 11:00', monday: 'Physical Sciences', tuesday: 'Life Sciences', wednesday: 'Physical Sciences', thursday: 'Life Sciences', friday: 'Geography', saturday: 'Soccer', sunday: 'Church' },
        { time: '11:00 - 12:00', monday: 'Geography', tuesday: 'Accounting', wednesday: 'Geography', thursday: 'Accounting', friday: 'Physical Sciences', saturday: 'Soccer', sunday: 'Family Time' },
        { time: '12:00 - 13:00', monday: 'Lunch', tuesday: 'Lunch', wednesday: 'Lunch', thursday: 'Lunch', friday: 'Lunch', saturday: 'Lunch', sunday: 'Lunch' },
        { time: '13:00 - 14:00', monday: 'Maths Lit', tuesday: 'English', wednesday: 'Maths Lit', thursday: 'English', friday: 'LO', saturday: 'Gaming', sunday: 'Free Time' },
        { time: '14:00 - 15:00', monday: 'English', tuesday: 'Maths Lit', wednesday: 'English', thursday: 'Maths Lit', friday: 'PE', saturday: 'Gaming', sunday: 'Free Time' }
      ]
    }
  ]);

  selectedStudentId = signal<number | null>(null);

  currentStudentTimetable = computed(() => {
    const id = this.selectedStudentId();
    const student = this.students().find(s => s.id === id);
    return student ? student.timetable : [];
  });

  // Define colors for subjects
  subjectColors: { [key: string]: string } = {
    'Mathematics': '#FFCDD2', // Red 100
    'Physics': '#E1BEE7', // Purple 100
    'English': '#C5CAE9', // Indigo 100
    'History': '#B3E5FC', // Light Blue 100
    'Geography': '#B2DFDB', // Teal 100
    'Biology': '#DCEDC8', // Light Green 100
    'Art': '#FFF9C4', // Yellow 100
    'PE': '#FFCCBC', // Deep Orange 100
    'Life Sciences': '#F0F4C3', // Lime 100
    'Physical Sciences': '#D1C4E9', // Deep Purple 100
    'Accounting': '#CFD8DC', // Blue Grey 100
    'Maths Lit': '#FFECB3', // Amber 100
    'LO': '#F8BBD0', // Pink 100
    'Lunch': '#EEEEEE', // Grey 200
    'Study Group': '#E0F7FA', // Cyan 50
    'Sports': '#E8F5E9', // Green 50
    'Rest': '#FFF3E0', // Orange 50
    'Church': '#F3E5F5', // Purple 50
    'Family Time': '#FCE4EC', // Pink 50
    'Free Time': '#FAFAFA', // Grey 50
    'Extra Class': '#FFF8E1', // Amber 50
    'Soccer': '#E0F2F1', // Teal 50
    'Gaming': '#ECEFF1' // Blue Grey 50
  };

  getSubjectColor(subject: string | undefined): string {
    if (!subject) return '#FFFFFF';
    return this.subjectColors[subject] || '#FFFFFF';
  }

  onStudentChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedStudentId.set(selectElement.value ? Number(selectElement.value) : null);
  }
}
