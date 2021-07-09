import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-addTask',
  templateUrl: 'addTask.page.html',
  styleUrls: ['addTask.page.scss']
})
export class AddTaskPage {
  taskForm: FormGroup;

  constructor(private builder: FormBuilder, private _taskService: TaskService, private _alertController: AlertController) {
    this.taskForm = builder.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      category: ["", [Validators.required]],
      task_date: ["", [Validators.required]],
      priority_level: ["", [Validators.required]],
      progress_level: ["", [Validators.required]],
    });
  }

 onSubmit() {
    const formData = this.taskForm.value;
    this._taskService.add_task(formData).subscribe((result) => {
      this.taskForm.reset(); // clear all form data
      this.showMessage("Success", "Task was successfully created.");
    }, (err) => {
      this.showMessage("Error", "Something went wrong.");
    });
  }

  private async showMessage(header: string, message: string) {
    const alert = await this._alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    alert.present();
  }

  get titleCtrl() {
    return this.taskForm.get('title');
  }

}
