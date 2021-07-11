import { Component } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  tasks: Task[];

  constructor(private _service: TaskService) {}

  ionViewWillEnter() {
    this._service.get_tasks_by_progress("pending").subscribe((result) => {
      this.tasks = result;
    }, (err) => {
      console.log(err);
    });
  }

}
