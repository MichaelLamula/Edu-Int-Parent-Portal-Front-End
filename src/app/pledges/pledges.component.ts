import { Component, signal, computed } from '@angular/core';

interface SubjectPledge {
  subject: string;
  teacher: string;
  currentMark: number;
  pledge: number | null;
  isLocked?: boolean; // Added to track if pledge is saved/locked
}

interface CareerChoice {
  name: string;
  aps: number | null;
}

interface Student {
  id: number;
  name: string;
  grade: string;
  subjects: SubjectPledge[];
  careerChoices: [CareerChoice, CareerChoice]; // Tuple for exactly 2 choices
}

@Component({
  selector: 'app-pledges',
  templateUrl: './pledges.component.html',
  styleUrls: ['./pledges.component.css'],
  standalone: false
})
export class PledgesComponent {
  // Mock data for multiple students
  students = signal<Student[]>([
    {
      id: 1,
      name: 'Alice Doe',
      grade: '10A',
      subjects: [
        { subject: 'Mathematics', teacher: 'Mr. Smith', currentMark: 75, pledge: null, isLocked: false },
        { subject: 'Physics', teacher: 'Ms. Johnson', currentMark: 78, pledge: null, isLocked: false },
        { subject: 'English', teacher: 'Mrs. Davis', currentMark: 82, pledge: null, isLocked: false },
        { subject: 'History', teacher: 'Mr. Brown', currentMark: 88, pledge: null, isLocked: false },
        { subject: 'Geography', teacher: 'Ms. Wilson', currentMark: 70, pledge: null, isLocked: false }
      ],
      careerChoices: [
        { name: '', aps: null },
        { name: '', aps: null }
      ]
    },
    {
      id: 2,
      name: 'Bob Doe',
      grade: '11B',
      subjects: [
        { subject: 'Life Sciences', teacher: 'Mr. Green', currentMark: 65, pledge: null, isLocked: false },
        { subject: 'Physical Sciences', teacher: 'Ms. White', currentMark: 70, pledge: null, isLocked: false },
        { subject: 'Mathematics', teacher: 'Mr. Smith', currentMark: 60, pledge: null, isLocked: false },
        { subject: 'Accounting', teacher: 'Mrs. Black', currentMark: 85, pledge: null, isLocked: false },
        { subject: 'English', teacher: 'Mrs. Davis', currentMark: 75, pledge: null, isLocked: false }
      ],
      careerChoices: [
        { name: '', aps: null },
        { name: '', aps: null }
      ]
    }
  ]);

  selectedStudentId = signal<number>(1);

  currentStudent = computed(() => {
    return this.students().find(s => s.id === this.selectedStudentId()) || this.students()[0];
  });

  selectStudent(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedStudentId.set(Number(selectElement.value));
  }

  updatePledge(index: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement.value ? Number(inputElement.value) : null;

    this.students.update(students => {
      return students.map(student => {
        if (student.id === this.selectedStudentId()) {
          const updatedSubjects = [...student.subjects];
          updatedSubjects[index] = { ...updatedSubjects[index], pledge: newValue };
          return { ...student, subjects: updatedSubjects };
        }
        return student;
      });
    });
  }

  updateCareerChoice(index: 0 | 1, field: 'name' | 'aps', event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;

    this.students.update(students => {
      return students.map(student => {
        if (student.id === this.selectedStudentId()) {
          const updatedChoices = [...student.careerChoices] as [CareerChoice, CareerChoice];
          if (field === 'name') {
            updatedChoices[index] = { ...updatedChoices[index], name: value };
          } else {
            updatedChoices[index] = { ...updatedChoices[index], aps: value ? Number(value) : null };
          }
          return { ...student, careerChoices: updatedChoices };
        }
        return student;
      });
    });
  }

  savePledges() {
    this.students.update(students => {
      return students.map(student => {
        if (student.id === this.selectedStudentId()) {
          const updatedSubjects = student.subjects.map(subject => {
            // Lock the pledge if a value has been entered
            if (subject.pledge !== null) {
              return { ...subject, isLocked: true };
            }
            return subject;
          });
          return { ...student, subjects: updatedSubjects };
        }
        return student;
      });
    });

    console.log('Saving pledges for student:', this.currentStudent().name);
    console.log('Subjects:', this.currentStudent().subjects);
    console.log('Career Choices:', this.currentStudent().careerChoices);
    alert('Pledges and Career Choices saved successfully!');
  }
}
