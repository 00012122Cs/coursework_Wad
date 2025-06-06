import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-form',
  template: `
    <form (ngSubmit)="add()">
      <input [(ngModel)]="task.title" name="title" placeholder="Title" />
      <input [(ngModel)]="task.description" name="description" placeholder="Description" />
      <input [(ngModel)]="task.dueDate" name="dueDate" type="date" />
      <input [(ngModel)]="task.priority" name="priority" type="number" />
      <button type="submit">Add</button>
    </form>
  `
})
export class TaskFormComponent {
  task: Task = { title: '', description: '', dueDate: '', priority: 1, isCompleted: false, userId: 1 };
  constructor(private taskService: TaskService) {}
  add() {
    this.taskService.addTask(this.task).subscribe(() => {
      this.task = { title: '', description: '', dueDate: '', priority: 1, isCompleted: false, userId: 1 };
    });
  }
}
// Student ID: 00012345
