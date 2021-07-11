import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 
  constructor(private http:HttpClient) { }

  get_tasks() {
    return this.http.get<Task[]>("http://localhost:3000");
  }

  get_tasks_by_progress(query: string) {
    return this.http.get<Task[]>(`http://localhost:3000/filter?progress=${query}`);
  }

  add_task(data) {
    return this.http.post("http://localhost:3000", data);
  }
}
