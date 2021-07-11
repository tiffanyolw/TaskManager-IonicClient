import { Component } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss']
})
export class TasksPage {
  tasks: Task[];

  constructor(private _service: TaskService) {
  }

  ionViewWillEnter() {
    this._service.get_tasks().subscribe((result) => {
      this.tasks = result;
    }, (err) => {
      console.log(err);
    });
  }

}
