import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  template: `
    <ul>
      <li *ngFor="let task of tasks">
        {{task.title}} - {{task.dueDate}} - {{task.priority}}
        <button (click)="delete(task.id!)">Delete</button>
      </li>
    </ul>
  `
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}
  ngOnInit() { this.load(); }
  load() { this.taskService.getTasks().subscribe(t => this.tasks = t); }
  delete(id: number) { this.taskService.deleteTask(id).subscribe(() => this.load()); }
}
// Student ID: 00012345
