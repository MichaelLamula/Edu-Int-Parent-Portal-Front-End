import { Component, signal, computed } from '@angular/core';

interface Teacher {
  name: string;
  email: string;
  officeHours: string;
}

interface Subject {
  name: string;
  teacher: Teacher;
}

interface Student {
  id: number;
  name: string;
  subjects: Subject[];
}

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css'],
  standalone: false
})
export class PerformanceComponent {
  students = signal<Student[]>([
    {
      id: 1,
      name: 'Alice Doe',
      subjects: [
        {
          name: 'Mathematics',
          teacher: { name: 'Mr. Smith', email: 'smith@school.edu', officeHours: 'Mon, Wed 14:00-15:00' }
        },
        {
          name: 'Physics',
          teacher: { name: 'Ms. Johnson', email: 'johnson@school.edu', officeHours: 'Tue, Thu 10:00-11:00' }
        },
        {
          name: 'English',
          teacher: { name: 'Mrs. Davis', email: 'davis@school.edu', officeHours: 'Fri 13:00-14:00' }
        }
      ]
    },
    {
      id: 2,
      name: 'Bob Doe',
      subjects: [
        {
          name: 'Life Sciences',
          teacher: { name: 'Mr. Green', email: 'green@school.edu', officeHours: 'Mon, Fri 09:00-10:00' }
        },
        {
          name: 'Physical Sciences',
          teacher: { name: 'Ms. White', email: 'white@school.edu', officeHours: 'Wed 11:00-12:00' }
        },
        {
          name: 'Accounting',
          teacher: { name: 'Mrs. Black', email: 'black@school.edu', officeHours: 'Tue 15:00-16:00' }
        }
      ]
    }
  ]);

  selectedStudentId = signal<number | null>(null);
  selectedSubjectName = signal<string | null>(null);

  // Computed property to get the currently selected student
  currentStudent = computed(() => {
    const id = this.selectedStudentId();
    return id ? this.students().find(s => s.id === id) : null;
  });

  // Computed property to get the list of subjects for the selected student
  currentStudentSubjects = computed(() => {
    const student = this.currentStudent();
    return student ? student.subjects : [];
  });

  // Computed property to get the details of the selected subject (including teacher info)
  currentSubjectDetails = computed(() => {
    const subjects = this.currentStudentSubjects();
    const subjectName = this.selectedSubjectName();
    return subjectName ? subjects.find(s => s.name === subjectName) : null;
  });

  onStudentChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const studentId = selectElement.value ? Number(selectElement.value) : null;
    this.selectedStudentId.set(studentId);
    this.selectedSubjectName.set(null); // Reset subject selection when student changes
  }

  onSubjectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedSubjectName.set(selectElement.value || null);
  }
}
