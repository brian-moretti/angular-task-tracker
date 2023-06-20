import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-task';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:5000/tasks';

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS); //! ASYNCRO CON OBSERVABLE
    return tasks;
  }

  getTasksHttp(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
    // cancella il task con l'id specifico
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOption);
  }

  addNewTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOption);
  }
}
