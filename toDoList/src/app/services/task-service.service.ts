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

  getTasks(): Observable<Task[]>{
    return this.client.get<Task[]>(this.apiUrl);
  }
}
