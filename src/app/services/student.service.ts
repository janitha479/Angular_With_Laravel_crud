import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  // Fetch all students
  getStudents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/show-std`);
  }

  // Fetch student by ID
  getStudentById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/show-std-byID/${id}`);
  }

  // Add a new student
  addStudent(student: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/store-std`, student);
  }

  // Update student
  updateStudent(id: number, student: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update-std/${id}`, student);
  }

  // Delete student
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete-std/${id}`);
  }
}
