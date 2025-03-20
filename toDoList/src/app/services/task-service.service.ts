import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private client: HttpClient) { }

  addTask(task: Task): Observable<Task> {
    return this.client.post<Task>(this.apiUrl, task);
  }

  getTasks(): Observable<Task[]>{
    return this.client.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task>{
    return this.client.delete<Task>(`${this.apiUrl}/${task.id}`);
  }

  updateTask(task: Task): Observable<Task>{
    return this.client.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }
}
